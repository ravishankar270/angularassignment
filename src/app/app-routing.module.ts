import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TodosComponent } from './todos/todos.component';
import { redirectUnauthorizedTo, canActivate, redirectLoggedInTo } from '@angular/fire/auth-guard'
const redirectToLogin = () => redirectUnauthorizedTo(['login'])
const redirectToHome=()=>redirectLoggedInTo([''])
const routes: Routes = [
  {
    path: '', component: TodosComponent, pathMatch: "full",...canActivate(redirectToLogin)
  },
  { path: 'login', component: LoginComponent,...canActivate(redirectToHome) },
  { path: 'signup', component: SignupComponent,...canActivate(redirectToHome) }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
