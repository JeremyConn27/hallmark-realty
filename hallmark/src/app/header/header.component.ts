import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  expanded = false;
  
  constructor() { }

  ngOnInit() {
  }

  toggleNav() {
    this.expanded = !this.expanded;
    let element = document.getElementById('body');
    element.classList.toggle('menu-open');
  }

}
