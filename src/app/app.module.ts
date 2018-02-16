import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents} from './app-routing/app-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModuleModule } from './material-module/material-module.module';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    // HomeComponent,
    // HeaderComponent,
    // CreateComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
