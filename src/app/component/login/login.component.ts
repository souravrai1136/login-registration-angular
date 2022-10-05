import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  UserLogin!: FormGroup;

  constructor(private fb: FormBuilder, private service: UserService, private rout: Router) { }

  ngOnInit(): void {
    this.UserLogin = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })

  }

  onSubmit(data: any) {
    this.service.login().subscribe((res: any) => {
      const user = res.find((a: any) => {
        return a.email === this.UserLogin.value.email && a.password === this.UserLogin.value.password
      });
      if (user) {
        alert('Login Success');
        this.UserLogin.reset();
        this.rout.navigate(['/home']);
      } else {
        alert('User Not found')
      }
    }, err => {
      alert('Something went Wrong')
    })

  }
}
