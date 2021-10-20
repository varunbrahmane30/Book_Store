import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss'],
})
export class ForgotpasswordComponent implements OnInit {
  forgotPasswordForm: any = FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  get f() {
    return this.forgotPasswordForm.controls;
  }
  ngOnInit() {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', Validators.required],
    });
  }

  onSubmitResetPassword() {
    console.log(this.forgotPasswordForm.value);
  }
}
