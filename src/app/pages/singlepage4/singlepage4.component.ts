import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
import { data } from 'src/assets/data';

@Component({
  selector: 'app-singlepage4',
  templateUrl: './singlepage4.component.html',
  styleUrls: ['./singlepage4.component.css']
})
export class Singlepage4Component {
  constructor(private router:Router,private hero:HeroService){}
  data=this.hero.givedata()
  single:any


  ngOnInit(){
    let id = Number(localStorage.getItem('id'))
    this.single = data.filter(e=>e.id===id)
    console.log("title",this.single)
  }

}
