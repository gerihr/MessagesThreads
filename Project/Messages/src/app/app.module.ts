import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageBoxComponent } from './message-box/message-box.component';
import { HomeComponent } from './home/home.component';
import { CustomDatePipe } from './customDate.pipe';
import { DatePipe } from '@angular/common';
import { MultipleMessagesComponent } from './multiple-messages/multiple-messages.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageBoxComponent,
    HomeComponent,
    CustomDatePipe,
    MultipleMessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
