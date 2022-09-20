import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocHeaderComponent } from './doc-header/doc-header.component';
import { DocSearchResultComponent } from './doc-search-result/doc-search-result.component';
import { DocSearchComponent } from './doc-search/doc-search.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'',component:LandingPageComponent},
  {path:'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'search', component:DocSearchComponent},
  {path: 'result', component:DocSearchResultComponent},
  {path: 'doc_header', component:DocHeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
