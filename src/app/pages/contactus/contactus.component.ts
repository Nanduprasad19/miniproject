import { Component } from '@angular/core';

import { AuthService } from 'src/app/auth.service';
import { Firestore } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  name:string='';
  email:string='';
  number:string='';
  message:string='';
constructor(private fire:Firestore,public auth:AuthService){}
submit()
{
  const data={
  name:this.name,
  email:this.email,
  number: this.number,
  message:this.message,
  }
  console.log(data);
  const docRef=collection(this.fire,"contactus")
  this.auth.insertData(docRef,data)
  this.name=''
  this.email=''
  this.number=''
  this.message=''
  alert('success')
}
}
