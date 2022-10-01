import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocHeaderComponent } from './doc-header/doc-header.component';
import { DocSearchResultComponent } from './doc-search-result/doc-search-result.component';

import { HealthauthGuard } from './healthauth.guard';
// import { HomeauthGuard } from './homeauth.guard';
import { NewPrescComponent } from './new-presc/new-presc.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PatientHeaderComponent } from './patient-header/patient-header.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { RecordsComponent } from './records/records.component';
import { DocProfileComponent } from './doc-profile/doc-profile.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { NewLabRepComponent } from './new-lab-rep/new-lab-rep.component';
import { AvailableDoctorsComponent } from './available-doctors/available-doctors.component';

const routes: Routes = [
  {path:'',component:LandingPageComponent},
  {path:'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  
  {path: 'pat_header',component:PatientHeaderComponent,canActivate:[HealthauthGuard]},
  {path: 'doc_header', component:DocHeaderComponent,canActivate:[HealthauthGuard]},
  {path: 'new_lab_rep', component:NewLabRepComponent},
  // {path: 'pat_header',component:PatientHeaderComponent,canActivate:[HealthauthGuard]},
  
  {path: 'login/forgot', component:ForgotpasswordComponent},

  {path: 'pat_header/book', component:BookAppointmentComponent},
  {path: 'pat_header/records', component:RecordsComponent},
  {path: 'pat_header/avail_doc', component:AvailableDoctorsComponent},
  {path: 'pat_header/profile_pat', component:PatientProfileComponent},

  {path: 'pat_header/book/avail_doc', component:AvailableDoctorsComponent},
  {path: 'pat_header/book/records', component:RecordsComponent},
  {path: 'pat_header/book/profile_pat', component:PatientProfileComponent},
  
  {path: 'pat_header/records/book', component:BookAppointmentComponent},
  {path: 'pat_header/records/avail_doc', component:AvailableDoctorsComponent},
  {path: 'pat_header/records/profile_pat', component:PatientProfileComponent},

  {path: 'pat_header/profile_pat/book', component:BookAppointmentComponent},
  {path: 'pat_header/profile_pat/avail_doc', component:AvailableDoctorsComponent},
  {path: 'pat_header/profile_pat/records', component:RecordsComponent},

  {path: 'pat_header/avail_doc/book', component:BookAppointmentComponent},
  {path: 'pat_header/avail_doc/records', component:RecordsComponent},
  {path: 'pat_header/avail_doc/profile_pat', component:PatientProfileComponent},
  


  {path: 'doc_header/result', component:DocSearchResultComponent},
  {path: 'doc_header/new_presc', component:NewPrescComponent},
  {path: 'doc_header/show_app', component:ViewAppointmentComponent},
  {path: 'doc_header/profile_doc', component:DocProfileComponent},

  {path: 'doc_header/show_app/result', component:DocSearchResultComponent},
  {path: 'doc_header/show_app/new_presc', component:NewPrescComponent},
  {path: 'doc_header/show_app/profile_doc', component:DocProfileComponent},

  {path: 'doc_header/new_presc/result', component:DocSearchResultComponent},
  {path: 'doc_header/new_presc/profile_doc', component:DocProfileComponent},
  {path: 'doc_header/new_presc/show_app', component:ViewAppointmentComponent},

  {path: 'doc_header/profile_doc/result', component:DocSearchResultComponent},
  {path: 'doc_header/profile_doc/show_app', component:ViewAppointmentComponent},
  {path: 'doc_header/profile_doc/new_presc', component:NewPrescComponent}
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }