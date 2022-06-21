import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

//Libraries
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatNativeDateModule } from '@angular/material/core';
import { AppointmentComponent } from './components/appointment/appointment.component';
import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule,

} from '@angular-material-components/datetime-picker';
import { ToastrModule } from 'ngx-toastr';

//Custom made
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { JoinService } from './services/join.service';
import { TutorPipe } from './pipes/tutor.pipe';
import { AppointmentListComponent } from './components/appointment-list/appointment-list/appointment-list.component';
import { TutorPageComponent } from './components/tutor-page/tutor-page.component';
import { LoginComponent } from './auth/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { SearchComponent } from './components/search/search.component';
import { RegisterComponent } from './auth/register.component';
import { interceptorProvider } from './interceptor/tutor-interceptor.service';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CreateTutorComponent } from './components/create-tutor/create-tutor.component';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SearchComponent,
    HeaderComponent,
    HomeComponent,
    TutorPipe,
    AppointmentListComponent,
    AppointmentComponent,
    TutorPageComponent,
    LoginComponent,
    RegisterComponent,
    UserProfileComponent,
    CreateTutorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    HttpClientModule,
    MatSelectModule,
    MatTabsModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule,
    ToastrModule.forRoot()
  ],
  providers: [JoinService,
    interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
