import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { SearchComponent } from './components/search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { TutorJoin } from './models/tutor-join';
import { JoinService } from './services/join.service';
import { TutorPipe } from './pipes/tutor.pipe';
import { AppointmentListComponent } from './components/appointment-list/appointment-list/appointment-list.component';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
//import {MatNativeDateModule} from '@angular/material/native-date';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatNativeDateModule } from '@angular/material/core';
import { AppointmentComponent } from './components/appointment/appointment.component';
import {
  NgxMatDateFormats,
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule,
  NGX_MAT_DATE_FORMATS
} from '@angular-material-components/datetime-picker';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SearchComponent,
    HeaderComponent,
    HomeComponent,
    TutorPipe,
    AppointmentListComponent,
    AppointmentComponent
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
  ],
  providers: [JoinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
