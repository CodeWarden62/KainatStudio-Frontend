import { Component, Injector, OnInit, ViewChild, afterNextRender, inject } from '@angular/core';
import { IServiceModel, ServicePropNames, dummyServices, getDefaultServiceModel } from '../services.model';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  MatFormField,
  MatFormFieldModule,
  MatLabel,
} from '@angular/material/form-field';
import { MatOption } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButton } from '@angular/material/button';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';
import { CdkTextareaAutosize, TextFieldModule } from '@angular/cdk/text-field';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-services-form',
  standalone: true,
  imports: [
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormField,
    MatLabel,
    MatOption,
    MatButton,
    ReactiveFormsModule,
    MatFormFieldModule,
    TextFieldModule
  ],
  templateUrl: './services-form.component.html',
  styleUrl: './services-form.component.scss',
})
export class ServicesFormComponent implements OnInit {
  service: IServiceModel = getDefaultServiceModel();
  serviceForm = new FormGroup({
    [ServicePropNames.Name]: new FormControl<string>('',{
      validators: [Validators.required, Validators.minLength(3), Validators.maxLength(50)]
    }),
    [ServicePropNames.Description]: new FormControl<string>('',{
      validators: [Validators.required, Validators.minLength(3), Validators.maxLength(500)]
    }),
    [ServicePropNames.MinPrice]: new FormControl<number|null>( null, {
      validators: [Validators.required, Validators.min(0), Validators.nullValidator]
    }),
    [ServicePropNames.MaxPrice]: new FormControl<number|null>(null, {
      validators: [Validators.required, Validators.min(0),Validators.nullValidator]
    }),
    [ServicePropNames.ActiveFlag]: new FormControl<boolean>(true, {
      validators: [Validators.required]
    }),
    [ServicePropNames.Thumbnail]: new FormControl<string>('', {
      validators: [Validators.required]
    }),

    [ServicePropNames.SortOrder]: new FormControl<number>(0, {
      validators: [Validators.required, Validators.min(0)]
    })
  });
  heading='Add New Serive';
  ServicePropNames = ServicePropNames;
  constructor(
    private router: Router,
    private servicesService: ServicesService
  ){
  }
  ngOnInit(): void {
    this.service = getDefaultServiceModel();
    this.heading='Add New Serive'
    if(this.router.url.includes('edit')){
      this.heading='Edit Service';
      const id = Number(this.router.url.split('/').pop());
      this.service = this.servicesService.getService(id)??getDefaultServiceModel();
      this.serviceForm.patchValue(this.service);
    }
  }


  onSubmit(): void {
    console.log(this.serviceForm.value);
    if(this.serviceForm.valid){
      this.service = this.formGroupToServiceModel();
      if(this.service.Id === 0){
        this.handleSubmitRequest(this.servicesService.addService(this.service));
      }else{
        this.handleSubmitRequest(this.servicesService.updateService(this.service));
      }
    }
  }

  handleSubmitRequest(submitRequest:Observable<any>){
    submitRequest.subscribe((res)=>{
      this.serviceForm.reset();
      this.router.navigate(['admin/services']);
    });

  }

  formGroupToServiceModel(): IServiceModel {
    return {
      Id: this.service.Id??0,
      Name: this.serviceForm.value[ServicePropNames.Name]??'',
      Thumbnail: this.serviceForm.value[ServicePropNames.Thumbnail]??'',
      Description: this.serviceForm.value[ServicePropNames.Description]??'',
      MinPrice: this.serviceForm.value[ServicePropNames.MinPrice]??0,
      MaxPrice: this.serviceForm.value[ServicePropNames.MaxPrice]??0,
      SortOrder: this.serviceForm.value[ServicePropNames.SortOrder]??0,
      ActiveFlag: this.serviceForm.value[ServicePropNames.ActiveFlag]??true
    }
  }
}
