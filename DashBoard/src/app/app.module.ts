import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharingModule } from 'src/sharing/sharing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactDataComponent } from './components/contact-data/contact-data.component';
import { PersnalDataComponent } from './components/persnal-data/persnal-data.component';
import { FullNamePipe } from './pipes/full-name.pipe';
import { CommentsComponent } from './components/comments/comments.component';
import { CalanderComponent } from './components/calander/calander.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactDataComponent,
    PersnalDataComponent,
    FullNamePipe,
    CommentsComponent,
    CalanderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
