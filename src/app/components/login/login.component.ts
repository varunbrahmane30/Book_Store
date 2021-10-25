import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/service/userservice/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login: boolean = true;
  loginForm: any = FormGroup;
  signupForm: any = FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserserviceService,
    private route: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.signupForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      mobileno: ['', Validators.required],
    });
  }

  get f() {
    return this.loginForm.controls;
  }
  get g() {
    return this.signupForm.controls;
  }

  onSubmit() {
    console.log(this.signupForm.value);
    if (this.signupForm.invalid) {
      return;
    } else {
      let reqPayload = {
        fullName: this.signupForm.value.fullname,
        email: this.signupForm.value.email,
        password: this.signupForm.value.password,
        mobileno: this.signupForm.value.mobileno,
      };

      console.log(this.signupForm.value);

      this.userService.registerservice(reqPayload).subscribe(
        (res) => {
          console.log(res);
          //   this.showSnackbar(res);
        },
        (err: any) => {
          console.log(err);
        }
      );
    }
  }

  onSubmitform() {
    console.log(this.loginForm.value);
    if (this.loginForm.invalid) {
      return;
    } else {
      let reqPayload = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      };

      console.log(this.loginForm.value);

      this.userService.loginservice(reqPayload).subscribe(
        (response: any) => {
          console.log(response),
            localStorage.setItem('token', response.result.accessToken),
            // this.snackbar.open(response.message, "close", {
            // duration: 1500,

            this.route.navigateByUrl('/home/books');
        },
        (error: any) => {
          console.log(error);
          // this.snackbar.open(error.error.message, "close", {
          //   duration: 1500,
        }
      );
    }
  }
  // this.userService.loginUserService(reqPayload).subscribe(
  //   (res) => {
  //     console.log(res);
  //     //   this.showSnackbar(res);
  //   },
  //   (err: any) => {
  //     console.log(err);
  //   }
  // );
  //   }
  // }

  toggleLogin(login: boolean) {
    this.login = login;
  }
}
