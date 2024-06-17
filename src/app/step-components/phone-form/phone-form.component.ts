import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import {
  Subject,
  filter,
  startWith,
  switchMap,
  take,
  takeUntil,
  tap,
} from 'rxjs';
import { BdPhoneValidatorService } from 'src/app/validators/bd-phone-validator/bd-phone-validator.service';

@Component({
  selector: 'app-phone-form',
  templateUrl: './phone-form.component.html',
  styleUrls: ['./phone-form.component.scss'],
})
export class PhoneFormComponent {
  @Input() stepper!: MatStepper;

  constructor(
    private formBuilder: FormBuilder,
    private bdPhoneValidator: BdPhoneValidatorService
  ) {}

  formSubmitSubject$ = new Subject<void>();
  private destroy$ = new Subject<void>();
  isLoading = false;
  phoneFormControl = this.formBuilder.group({
    phone: [
      '',
      {
        validators: Validators.required,
        asyncValidators: this.bdPhoneValidator.validate.bind(
          this.bdPhoneValidator
        ),
        updateOn: 'submit',
      },
    ],
  });

  ngOnInit() {
    this.formSubmitSubject$
      .pipe(
        takeUntil(this.destroy$),
        tap(() => {
          this.phoneFormControl.markAsDirty();
          this.isLoading = true;
        }),
        switchMap(() =>
          this.phoneFormControl.statusChanges.pipe(
            startWith(this.phoneFormControl.status),
            filter((status) => status !== 'PENDING'),
            tap(() => (this.isLoading = false)),
            take(1)
          )
        ),
        filter((status) => status === 'VALID')
      )
      .subscribe(() => this.stepper.next()); //validation successful
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
