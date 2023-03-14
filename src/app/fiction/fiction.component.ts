import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-fiction',
  templateUrl: './fiction.component.html',
  styleUrls: ['./fiction.component.css']
})
export class FictionComponent {
  
  constructor(private router: Router,
    private hero:HeroService) { }
  category=this.hero.givedata();
  goToNextPage(id:any){
    localStorage.setItem('id',id);
    this.router.navigate(['/singlepage']);
  }
  

}
