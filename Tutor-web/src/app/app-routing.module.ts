import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { AppointmentListComponent } from './components/appointment-list/appointment-list/appointment-list.component';
import { TutorPageComponent } from './components/tutor-page/tutor-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'search', component: SearchComponent},
  { path: 'appointment/:id', component: AppointmentComponent},
  { path: 'appointment-list', component: AppointmentListComponent},
  { path: 'tutor/:id', component: TutorPageComponent}
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
