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
import { BdEmailValidatorService } from 'src/app/validators/bd-email-validator/bd-email-validator.service';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss'],
})
export class EmailFormComponent {
  @Input() stepper!: MatStepper;

  constructor(
    private formBuilder: FormBuilder,
    private bdEmailValidator: BdEmailValidatorService
  ) {}

  formSubmitSubject$ = new Subject<void>();
  private destroy$ = new Subject<void>();
  isLoading = false;
  emailFormControl = this.formBuilder.group({
    email: [
      '',
      {
        validators: Validators.required,
        asyncValidators: this.bdEmailValidator.validate.bind(
          this.bdEmailValidator
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
          this.emailFormControl.markAsDirty();
          this.isLoading = true;
        }),
        switchMap(() =>
          this.emailFormControl.statusChanges.pipe(
            startWith(this.emailFormControl.status),
            filter((status) => status !== 'PENDING'),
            tap(() => (this.isLoading = false)),
            take(1)
          )
        ),
        filter((status) => status === 'VALID')
      )
      .subscribe(() => this.stepper.next()); // validation successful
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
