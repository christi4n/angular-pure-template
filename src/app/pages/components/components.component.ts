import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {

  constructor(private titleService: Title) { }

  // Getters and Setters for page title
  getTitle() {
    this.titleService.getTitle();
  }

  setTitle(title: string) {
    this.titleService.setTitle(title);
  }

  ngOnInit(): void {
    this.setTitle('Components Pure')
  }

}
