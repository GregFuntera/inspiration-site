import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents} from './app-routing/app-routing.module';
import { MaterialModuleModule } from './material-module/material-module.module';
import { CarouselComponent } from './home/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    CarouselComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
