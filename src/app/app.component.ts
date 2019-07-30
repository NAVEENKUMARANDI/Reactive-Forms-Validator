import { Component } from '@angular/core';

import { FormBuilder, Validators } from "@angular/forms";
import { AgeValidator } from "./validators/AgeValidator";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public fb: FormBuilder) {}

  validatorForm = this.fb.group({
    firstName: ['', [Validators.required, AgeValidator]]
  })

  get name() {
    return this.validatorForm.get('name');
  }

  onSubmit() {
    if(!this.validatorForm.valid) {
      alert('Please enter your age!')
      return false;
    } else {
      alert(JSON.stringify(this.validatorForm.valid))
    }
  }
}
