import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-name-form',
  templateUrl: './name-form.component.html',
  styleUrls: ['./name-form.component.scss'],
})
export class NameFormComponent {
  constructor(private formBuilder: FormBuilder) {}

  nameFormControl = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
  });
}
