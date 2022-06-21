import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { AppointmentListComponent } from './components/appointment-list/appointment-list/appointment-list.component';
import { TutorPageComponent } from './components/tutor-page/tutor-page.component';
import { RegisterComponent } from './auth/register.component';
import { LoginComponent } from './auth/login.component';
import { TutorGuardService as Guard } from './guards/tutor-guard.service';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CreateTutorComponent } from './components/create-tutor/create-tutor.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'search', component: SearchComponent },
  { path: 'appointment/:id', component: AppointmentComponent, canActivate: [Guard], data: { expectedRole: ['tutor', 'student'] } },
  { path: 'appointment-list', component: AppointmentListComponent },
  { path: 'tutor/:id', component: TutorPageComponent, canActivate: [Guard], data: { expectedRole: ['tutor', 'student'] }  },
  { path: 'user', component: UserProfileComponent, canActivate: [Guard], data: {expectedRole: ['student']}},
  { path: 'newtutor', component: CreateTutorComponent, canActivate: [Guard], data: {expectedRole: ['admin', 'tutor']}}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
