import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ImageComponent } from './image/image.component';
import { ContactComponent } from './contact/contact.component';
import { ImageTextComponent } from './image-text/image-text.component';
import { ServicesComponent } from './services/services.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ImageComponent,
    ContactComponent,
    ImageTextComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
