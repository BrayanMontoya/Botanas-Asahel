
import { Directive } from '@angular/core';
import { Validator, ValidatorFn, AbstractControl, FormControl, NG_VALIDATORS } from '@angular/forms';

function formatoTelefono(): ValidatorFn {
  const pattern = new RegExp(/^([\+][0-9])?(-?[0-9]+)*$/im);
  return (control: AbstractControl) => {
    if (control.value === undefined || control.value === null || control.value === '') {
      return null;
    } else if (!pattern.test(control.value)) {
      return {
        formatoTelefono: {
          valid: false
        }
      };
    }
    return null;
  };
}

@Directive({
  selector: '[appFormatoTelefono]',
  providers: [{ provide: NG_VALIDATORS, useExisting: FormatoTelefonoDirective, multi: true }]
})


export class FormatoTelefonoDirective implements Validator {
  validator: ValidatorFn;

  constructor() {
    this.validator = formatoTelefono();
  }

  validate(c: FormControl) {
    return this.validator(c);
  }
}
