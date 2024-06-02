import { Component, OnInit } from '@angular/core';
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
    })
  });

  constructor(
    private router: Router,
    private servicesService: ServicesService
  ){
  }
  ngOnInit(): void {
    // if editing get id from url
    // the service from the dummyServices
    // and set the form values

    if(this.router.url.includes('edit')){
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
        this.servicesService.addService(this.service);
      }else{
        this.servicesService.updateService(this.service);
      }
      this.serviceForm.reset();
      this.router.navigate(['admin/services']);
    }
  }

  formGroupToServiceModel(): IServiceModel {
    return getDefaultServiceModel();
  }
}
