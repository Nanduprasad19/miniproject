import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { FictionComponent } from './fiction/fiction.component';
import { NonfictionComponent } from './nonfiction/nonfiction.component';
import { HumorComponent } from './humor/humor.component';
import { RomanceComponent } from './romance/romance.component';
import { SinglepageComponent } from './pages/singlepage/singlepage.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { Singlepage2Component } from './pages/singlepage2/singlepage2.component';
import { Singlepage3Component } from './pages/singlepage3/singlepage3.component';
import { Singlepage4Component } from './pages/singlepage4/singlepage4.component';
import { BookingComponent } from './pages/booking/booking.component';
const routes: Routes = [

    {
    path:'' ,component:HomeComponent
    },
    {
      path:'category' ,component:CategoryComponent
      },
      {
        path:'fiction' ,component:FictionComponent
        },
        {
          path:'nonfiction' ,component:NonfictionComponent
          },
          {
            path:'romance' ,component:RomanceComponent
            },
            {
              path:'humor' ,component:HumorComponent
              },
              {
                path:'login' ,component:LoginComponent
                },
              
                {
                    path:'signup' ,component:SignupComponent
                    },
                    {
                      path:'contactus' ,component:ContactusComponent
                      },
                      {
                        path:'singlepage' ,component:SinglepageComponent
                        },
                        {
                          path:'singlepage2' ,component:Singlepage2Component
                          },
                          {
                            path:'singlepage3' ,component:Singlepage3Component
                            },
                            {
                              path:'singlepage4' ,component:Singlepage4Component
                              },
                         
                              {
                                path:'booking' ,component:BookingComponent
                                },
                           
                      
                         
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
