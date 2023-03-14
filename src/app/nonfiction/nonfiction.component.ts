import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-nonfiction',
  templateUrl: './nonfiction.component.html',
  styleUrls: ['./nonfiction.component.css']
})
export class NonfictionComponent {
  constructor(private router: Router,
    private hero:HeroService) { }
  category=this.hero.givedata();
  goToNextPage(id:any){
    localStorage.setItem('id',id);
    this.router.navigate(['/singlepage2']);
  }
}
