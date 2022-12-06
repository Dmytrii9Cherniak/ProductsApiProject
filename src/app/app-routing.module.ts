import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {MainContentComponent} from "./components/main-content/main-content.component";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: "full"},
  {path: 'login', component: LoginComponent},
  {path: 'content', component: MainContentComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
