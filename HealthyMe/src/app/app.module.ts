import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DocHeaderComponent } from './doc-header/doc-header.component';
import { FormsModule } from '@angular/forms';
import { PatientHeaderComponent } from './patient-header/patient-header.component';
import { NewPrescComponent } from './new-presc/new-presc.component';
import { DocSearchResultComponent } from './doc-search-result/doc-search-result.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { RecordsComponent } from './records/records.component';
import { AvailableDoctorsComponent } from './available-doctors/available-doctors.component';
import { NewLabRepComponent } from './new-lab-rep/new-lab-rep.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { DocProfileComponent } from './doc-profile/doc-profile.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    SignupComponent,
 
    DocHeaderComponent,
    PatientHeaderComponent,
    NewPrescComponent,
    DocSearchResultComponent,
    ViewAppointmentComponent,
    BookAppointmentComponent,
    RecordsComponent,
    AvailableDoctorsComponent,
    NewLabRepComponent,
    ForgotpasswordComponent,
    DocProfileComponent,
    PatientProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    ToastrModule.forRoot({timeOut:2000,progressBar:true,progressAnimation:'increasing',preventDuplicates:true})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
