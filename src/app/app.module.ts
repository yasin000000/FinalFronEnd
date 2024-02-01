import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { CreateUserComponent } from './create-user/create-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { authInterceptorProvicers } from './services/Interceptor.1';
import { DashboardComponent } from './pages/Admin/dashboard/dashboard.component';
import { DashboarduserComponent } from './pages/User/dashboarduser/dashboarduser.component';
import { ShowprofileComponent } from './pages/showprofile/showprofile.component';
import {MatListModule} from '@angular/material/list';
import { SidbarComponent } from './pages/Admin/sidbar/sidbar.component';
import { WelcomeComponent } from './pages/Admin/welcome/welcome.component';
import { ViewCategoriesComponent } from './pages/Admin/view-categories/view-categories.component';
import { AddCatagoryComponent } from './pages/Admin/add-catagory/add-catagory.component';
import { ViewQuizesComponent } from './pages/Admin/view-quizes/view-quizes.component';
import { AddQuizesComponent } from './pages/Admin/add-quizes/add-quizes.component';
// import { UserdashboardComponent } from './pages/user/userdashboard/userdashboard.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import { UpdateQuizeComponent } from './pages/Admin/update-quize/update-quize.component';
import { AddQueitionsComponent } from './pages/Admin/add-queitions/add-queitions.component';
import { ViewQueitionsComponent } from './pages/Admin/view-queitions/view-queitions.component';
import { UsidbarComponent } from './pages/User/usidbar/usidbar.component';
import { LoadQuizeComponent } from './pages/User/load-quize/load-quize.component';
import { InstructionsComponent } from './pages/User/instructions/instructions.component';
import { StartComponent } from './pages/User/start/start.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';

//Wrong Imports fo ngx Loader
  // import { NgxUiLoaderModule } from '@angular/ngx-ui-loader';
  // import { NgxUiLoaderHttpModule } from '@angular/ngx-ui-loader/public-api';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    DashboarduserComponent,
    ShowprofileComponent,
    SidbarComponent,
    WelcomeComponent,
    ViewCategoriesComponent,
    AddCatagoryComponent,
    ViewQuizesComponent,
    AddQuizesComponent,
    UpdateQuizeComponent,
    AddQueitionsComponent,
    ViewQueitionsComponent,
    UsidbarComponent,
    LoadQuizeComponent,
    InstructionsComponent,
    StartComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true
    }),

  ],
  providers: [authInterceptorProvicers],
  bootstrap: [AppComponent]
})
export class AppModule { }
