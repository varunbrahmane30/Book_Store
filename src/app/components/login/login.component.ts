import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/adminservice/admin.service';
import { UserserviceService } from 'src/app/service/userservice/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginformdata: any;
  signupformdata: any;
  hidden = false;
  token: any;

  constructor(
    private userservice: UserserviceService,
    private adminservice: AdminService,
    private snackbar: MatSnackBar,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.loginformdata = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      selectedvalue: new FormControl('', [Validators.required]),
    });

    this.signupformdata = new FormGroup({
      fullname: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      mobilenumber: new FormControl('', Validators.required),
      selectedvalue: new FormControl('', Validators.required),
    });
  }

  OnSubmitSignup() {
    let payload = {
      fullName: this.signupformdata.value.fullname,
      email: this.signupformdata.value.username,
      password: this.signupformdata.value.password,
      phone: this.signupformdata.value.mobilenumber,
    };

    console.log(payload);

    if (!this.signupformdata.invalid) {
      if (this.signupformdata.value.selectedvalue == 'User') {
        this.userservice.registerservice(payload).subscribe(
          (response: any) => {
            console.log(response);
            this.snackbar.open(response.message, ' ', {
              duration: 1500,
            });
          },
          (error) => {
            console.log(error);
            this.snackbar.open(error.error.message, 'close', {
              duration: 1500,
            });
          }
        );
      } else if (this.signupformdata.value.selectedvalue == 'Admin') {
        this.adminservice.adminRegistrationService(payload).subscribe(
          (response: any) => {
            console.log(response),
              this.snackbar.open('Admin Registration successfull', ' ', {
                duration: 1500,
              });
          },
          (error) => {
            console.log(error);
            this.snackbar.open(error.error.message, 'close', {
              duration: 1500,
            });
          }
        );
      }
    }
  }

  onSubmit() {
    let payload = {
      email: this.loginformdata.value.username,
      password: this.loginformdata.value.password,
    };
    console.log(payload);
    if (!this.loginformdata.invalid) {
      if (this.loginformdata.value.selectedvalue == 'User') {
        this.userservice.loginservice(payload).subscribe(
          (response: any) => {
            console.log(response);
            this.snackbar.open(response.message, 'close', {
              duration: 1500,
            });
            localStorage.setItem('token', response.result.accessToken);
            this.route.navigateByUrl('/home/books');
          },
          (error: any) => {
            console.log(error);
            this.snackbar.open(error.error.message, 'close', {
              duration: 1500,
            });
          }
        );
      } else if (this.loginformdata.value.selectedvalue == 'Admin') {
        this.adminservice.adminLoginService(payload).subscribe(
          (response: any) => {
            console.log('admin response', response);
            this.snackbar.open(response.message, 'close', {
              duration: 1500,
            });
            localStorage.setItem('token', response.result.accessToken);
            console.log(this.token);
            this.route.navigateByUrl('/home/admin/books');
          },
          (error: any) => {
            console.log(error);
            this.snackbar.open(error.error.message, 'close', {
              duration: 1500,
            });
          }
        );
      }
    }
  }

  hide() {
    this.hidden = !this.hidden;
  }
}
