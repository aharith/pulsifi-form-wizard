import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { BigDataValidateService } from 'src/app/services/big-data-api/big-data-api.service';

@Injectable({
  providedIn: 'root',
})
export class BdEmailValidatorService implements AsyncValidator {
  constructor(private bdValidatorService: BigDataValidateService) {}

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.bdValidatorService.validateEmail(control.value).pipe(
      map((response) => (response.isValid ? null : { emailInvalid: true })),
      catchError(() => of({ apiError: true }))
    );
  }
}
