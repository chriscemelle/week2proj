import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToGGLeComponent } from './to-ggle/to-ggle.component';

@NgModule({
  declarations: [
    AppComponent,
    ToGGLeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
