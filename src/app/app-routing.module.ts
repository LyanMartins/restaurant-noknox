import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AuthService } from './auth/auth.service';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component:AppComponent,canActivate:[AuthService]},
  {path:'**',redirectTo:'/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
