import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Tambahkan Ini Pertama
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApayaComponent } from './app/apaya/apaya.component';

@NgModule({
  declarations: [
    AppComponent,
    ApayaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Tambahkan Ini Kedua
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
