import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'angular-unit-test-sample';
  emailFormControl = new FormControl('', [Validators.required]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(6)]);
  isEnable: boolean = false;
  ngOnInit() {
    if(this.emailFormControl.valid && this.passwordFormControl.valid) {
      this.isEnable = true;
    }
  }

  isValid() {
    if(this.emailFormControl.valid && this.passwordFormControl.valid) {
      this.isEnable = true;
    }
  }
  submit() {
    console.log('TEST')
    // alert('')
  }
}
