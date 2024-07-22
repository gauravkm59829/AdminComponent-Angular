import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AddCarComponent } from './add-car/add-car.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'registration', component:RegistrationComponent},
  { path: 'login', component:LoginComponent},
  { path: 'admin', component:AdminComponent},
  { path: 'addcar', component:AddCarComponent},
  { path: 'admin/status', component: StatusComponent },
  { path: '', redirectTo: '/register', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/register' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
