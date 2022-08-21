import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  activeMenu:boolean = false;
  counter: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(){
    this.activeMenu = !this.activeMenu;
  }

}
