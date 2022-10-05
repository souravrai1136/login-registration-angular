import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  UserRegistration: any = FormGroup;
  id: any = 1;

  constructor(private fb: FormBuilder, private service: UserService, private rout: Router) {

  }

  ngOnInit() {
    this.UserRegistration = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      role: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email,]],
      password: ['', [Validators.required,]],
    })
  }
  onSubmit() {
    this.service.addUser(this.UserRegistration.value).subscribe((data: any) => {
      console.log(data);
      this.UserRegistration.reset();
      this.rout.navigate([''])
    })
  }


}
