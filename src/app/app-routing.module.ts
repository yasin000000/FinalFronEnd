import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCatagoryComponent } from './pages/Admin/add-catagory/add-catagory.component';
import { AddQueitionsComponent } from './pages/Admin/add-queitions/add-queitions.component';
import { AddQuizesComponent } from './pages/Admin/add-quizes/add-quizes.component';
import { DashboardComponent } from './pages/Admin/dashboard/dashboard.component';
import { UpdateQuizeComponent } from './pages/Admin/update-quize/update-quize.component';
import { ViewCategoriesComponent } from './pages/Admin/view-categories/view-categories.component';
import { ViewQueitionsComponent } from './pages/Admin/view-queitions/view-queitions.component';
import { ViewQuizesComponent } from './pages/Admin/view-quizes/view-quizes.component';
import { WelcomeComponent } from './pages/Admin/welcome/welcome.component';
//  import { DashboardComponent } from './pages/User/dashboard1/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ShowprofileComponent } from './pages/showprofile/showprofile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DashboarduserComponent } from './pages/User/dashboarduser/dashboarduser.component';
import { InstructionsComponent } from './pages/User/instructions/instructions.component';
import { LoadQuizeComponent } from './pages/User/load-quize/load-quize.component';
import { StartComponent } from './pages/User/start/start.component';
import { AdminGuard } from './services/admin.guard';

const routes: Routes = [
  {path:"signup",component:SignupComponent,pathMatch:'full'},
  {path:"login",component:LoginComponent,pathMatch:'full'},
  {path:"",component:HomeComponent,pathMatch:'full'},
  {path:"start/:qid",component:StartComponent},
  {path:"admin-dashboard",component:DashboardComponent,canActivate:[AdminGuard],children:[
    {path:"",component:WelcomeComponent},
    {path:"profile",component:ShowprofileComponent},
    {path:"view-category",component:ViewCategoriesComponent},
    {path:"add-category",component:AddCatagoryComponent},
    {path:"view-quize",component:ViewQuizesComponent},
    {path:"add-quize",component:AddQuizesComponent},
    {path:"update-quize/:quizeid",component:UpdateQuizeComponent},
    {path:"add-queitions/:queistionsId/:title",component:AddQueitionsComponent},
    {path:"view-queitions/:quizeid/:title",component:ViewQueitionsComponent},
  ]},
  {path:"user-dashboard",component:DashboarduserComponent,children:[
    {path:":catId",component:LoadQuizeComponent},
    {path:"instructions/:qid",component:InstructionsComponent},
  ]},

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
