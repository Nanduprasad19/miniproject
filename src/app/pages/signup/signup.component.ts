import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  name:string='';
  email:string='';
  password:string='';
constructor(private auth:AuthService,private router:Router){}
  ngOnInit(): void {
    
  }
  signup(){
    if(this.name=='')
    {alert('please enter name')
  return;}
  
  if(this.email=='')
  {alert('please enter email')
  return;}
  if(this.password=='')
  {alert('please enter password')
  return;
}
  this.auth.register(this.name,this.email,this.password)
  this.email='';
  this.name='';
  this.password='';
  this.router.navigate(['login'])
}

}

