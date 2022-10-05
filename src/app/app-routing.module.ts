import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { UserRegistrationComponent } from './component/user-registration/user-registration.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'registration', component: UserRegistrationComponent },
  { path: 'home', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
