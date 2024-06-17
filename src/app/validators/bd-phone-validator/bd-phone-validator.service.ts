import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { Observable, catchError, map, of } from 'rxjs';
import { BigDataValidateService } from 'src/app/services/big-data-api/big-data-api.service';

@Injectable({
  providedIn: 'root',
})
export class BdPhoneValidatorService implements AsyncValidator {
  constructor(private bdValidatorService: BigDataValidateService) {}

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.bdValidatorService.validatePhone(control.value).pipe(
      map((response) => (response.isValid ? null : { phoneInvalid: true })),
      catchError(() => of({ apiError: true }))
    );
  }
}
