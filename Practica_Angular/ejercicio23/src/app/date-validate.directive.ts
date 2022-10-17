import { Directive, Input } from "@angular/core";
import { FormControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn, AbstractControl } from "@angular/forms";

@Directive({
    selector: '[dateValidate][ngModel]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: DateValidateDirective,
        multi: true,
    }]
})

export class DateValidateDirective implements Validator{
    constructor() {}

    validate(control: AbstractControl): ValidationErrors | null  {
        return dateValidator()(control);
    }
}

export function dateValidator(): ValidatorFn {
	return (control: AbstractControl): ValidationErrors | null => {
		const dayToValidate = new Date(control.value).getDay();
		switch (dayToValidate) {
			case 6:
				return { isSaturday: true };
			case 0:
				return { isSunday: true };
			default:
				return null;
				break;
		}
	};
}