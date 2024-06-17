import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { NameFormComponent } from '../step-components/name-form/name-form.component';
import { PhoneFormComponent } from '../step-components/phone-form/phone-form.component';
import { EmailFormComponent } from '../step-components/email-form/email-form.component';
import { FormGroup } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  @ViewChild('stepper') stepper!: MatStepper;
  @ViewChild('NameFormComponent') nameFormComponent!: NameFormComponent;
  @ViewChild('PhoneFormComponent') phoneFormComponent!: PhoneFormComponent;
  @ViewChild('EmailFormComponent') emailFormComponent!: EmailFormComponent;

  constructor(private cdr: ChangeDetectorRef) {}

  nameForm!: FormGroup;
  emailForm!: FormGroup;
  phoneForm!: FormGroup;
  isLinear = true;

  ngAfterViewInit() {
    this.nameForm = this.nameFormComponent.nameFormControl;
    this.emailForm = this.emailFormComponent.emailFormControl;
    this.phoneForm = this.phoneFormComponent.phoneFormControl;
    this.cdr.detectChanges();
  }

  onSubmit() {
    const formDataObj: { [key: string]: string } = {
      name: this.nameForm.value.name,
      email: this.emailForm.value.email,
      phone: this.phoneForm.value.phone,
    };
    console.log(formDataObj);
  }
}
