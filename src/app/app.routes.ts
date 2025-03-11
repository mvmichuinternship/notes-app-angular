import { Routes } from '@angular/router';
import { LoginComponent } from './user-login/login/login.component';
import { RegisterComponent } from './user-login/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: UserLoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard] },
];
