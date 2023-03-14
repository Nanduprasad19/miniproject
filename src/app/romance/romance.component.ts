import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-romance',
  templateUrl: './romance.component.html',
  styleUrls: ['./romance.component.css']
})
export class RomanceComponent {  constructor(private router: Router,
  private hero:HeroService) { }
category=this.hero.givedata();
goToNextPage(id:any){
  localStorage.setItem('id',id);
  this.router.navigate(['/singlepage3']);
}

}
