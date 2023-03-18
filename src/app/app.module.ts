import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { UnitsComponent } from './units/units.component';
import { NavbarComponent } from './units/navbar/navbar.component';
import { FooterComponent } from './units/footer/footer.component';
import { HumorComponent } from './humor/humor.component';
import { FictionComponent } from './fiction/fiction.component';
import { NonfictionComponent } from './nonfiction/nonfiction.component';
import { RomanceComponent } from './romance/romance.component';
import { SinglepageComponent } from './pages/singlepage/singlepage.component';
import { Singlepage2Component } from './pages/singlepage2/singlepage2.component';
import { Singlepage3Component } from './pages/singlepage3/singlepage3.component';
import { Singlepage4Component } from './pages/singlepage4/singlepage4.component';
import { BookingComponent } from './pages/booking/booking.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    HomeComponent,
    CategoryComponent,
    LoginComponent,
    SignupComponent,
    ContactusComponent,
    UnitsComponent,
    NavbarComponent,
    FooterComponent,
    HumorComponent,
    FictionComponent,
    NonfictionComponent,
    RomanceComponent,
    SinglepageComponent,
    Singlepage2Component,
    Singlepage3Component,
    Singlepage4Component,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore())
  ],
  providers:[{provide:FIREBASE_OPTIONS,useValue:environment.firebase }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
