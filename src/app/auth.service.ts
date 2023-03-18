import { Injectable } from '@angular/core';
import{AngularFireAuth} from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { addDoc } from 'firebase/firestore';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private comic: AngularFireAuth,private router:Router ) {  }

register(_name:string,email:string,password:string)
{
  this.comic.createUserWithEmailAndPassword(email,password).then(()=>{
    alert('registration successfll');
    localStorage.setItem('isLoggedIn',JSON.stringify(true))

    this.router.navigate(['login']);
 },_err =>{this.router.navigate(['signup'])
})
}
login(email:string,password:string){
  this.comic.signInWithEmailAndPassword(email,password).then(()=>{
alert('login succesfull');
localStorage.setItem('token','true')
localStorage.setItem('isLoggedIn',JSON.stringify(true))
this.router.navigate([''])

  }, _err=>{
    alert('invalid password');
    this.router.navigate(['/login'])
  })

}
logout(){
  this.comic.signOut().then(()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login'])

  }, err=>{
    alert(err.message)
  })
}
isLoggedIn(){
  const user=JSON.parse(localStorage.getItem('isLoggedIn')||'false')
  if(user){
    return true
  }
  else{
    return false
  }
}
insertData(docRef:any,data:any){
  addDoc(docRef,data)
  .catch((err)=>alert(err))
}

}