import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-humor',
  templateUrl: './humor.component.html',
  styleUrls: ['./humor.component.css']
})
export class HumorComponent {
  constructor(private router: Router,
    private hero:HeroService) { }
  category=this.hero.givedata();
  goToNextPage(id:any){
    localStorage.setItem('id',id);
    this.router.navigate(['/singlepage4']);
  }

}
