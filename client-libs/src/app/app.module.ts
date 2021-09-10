import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatsModule } from 'projects/ai-chat/src/public-api';
import { PhoneModule } from 'projects/ai-phone/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChatsModule,
    AppRoutingModule,
    PhoneModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
