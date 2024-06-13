import { Injectable } from '@angular/core';

export interface IError {
  ErrorCode: string;
  ErrorMessage: string;
  FormattedMessage?: string;
}

export const ErrorNames = {
  InvalidCredentials: 'InvalidCredentials',
  GenericError: 'GenericError',
}
@Injectable({
  providedIn: 'root'
})
export class ErrorsService {
  Errors!:{
    [key in keyof typeof ErrorNames]?: IError;
  };
  constructor() {
    this.getData();
  }

  async getData() {
    const response = await fetch('assets/configurations/Errors.json');
    const data = await response.json();
    const missingKeys = Object.keys(ErrorNames).filter(key => !data[key]);
    // in case of missing keys use default error message
    missingKeys.forEach(key => {
      data[key] = {
        ErrorCode: key,
        ErrorMessage: "Requested action could not be completed. Please try again later.",
      };
    });
    this.Errors = data;
  }
  getFormattedErrorObject (error: IError, ...args: any[]): IError {
    let {ErrorCode, ErrorMessage, FormattedMessage} = error;
    let messageToFormat = ErrorMessage ;
    if(FormattedMessage){
      messageToFormat = FormattedMessage;
    }
    if (messageToFormat.includes('$')) {
      for (let i = 0; i < args.length; i++) {
        messageToFormat = messageToFormat.replace(`$${i + 1}`, args[i]);
      }
    }
    return {ErrorCode:ErrorCode,ErrorMessage: messageToFormat};
  };

}
