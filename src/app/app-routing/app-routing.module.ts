import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../home/home.component';
import { CreateComponent } from '../create/create.component';

const routes: Routes = [
  { path: '', component: HeaderComponent ,
  children: [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'create', component: CreateComponent }
  ]},
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
  declarations: [

  ]
})
export class AppRoutingModule { }

export const routingComponents = [HeaderComponent, HomeComponent, CreateComponent];
