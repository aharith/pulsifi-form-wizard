import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

// material ui modules
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// components
import { MainPageComponent } from './main-page/main-page.component';
import { NameFormComponent } from './step-components/name-form/name-form.component';
import { EmailFormComponent } from './step-components/email-form/email-form.component';
import { PhoneFormComponent } from './step-components/phone-form/phone-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NameFormComponent,
    EmailFormComponent,
    PhoneFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JsonPipe,
    MatCardModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
