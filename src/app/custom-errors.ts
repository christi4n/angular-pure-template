import {ErrorMessage} from "ng-bootstrap-form-validation";

export const CUSTOM_ERRORS: ErrorMessage[] = [
    {
      error: "required",
      format: requiredFormat
    }, {
      error: "email",
      format: emailFormat
    }
  ];
   
  export function requiredFormat(label: string, error: any): string {
    return `${label} est un champ obligatoire !`;
  }
   
  export function emailFormat(label: string, error: any): string {
    return `${label} ne semble pas être une adresse mail valide`;
  }