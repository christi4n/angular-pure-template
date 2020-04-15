import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private titleService: Title) { }

  // Getters and Setters for page title
  getTitle() {
    this.titleService.getTitle();
  }

  setTitle(title: string) {
    this.titleService.setTitle(title);
  }

  ngOnInit(): void {
    this.setTitle('About page')
  }

}
