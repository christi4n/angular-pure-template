import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  constructor(private titleService: Title) { }

  // Getters and Setters for page title
  getTitle() {
    this.titleService.getTitle();
  }

  setTitle(title: string) {
    this.titleService.setTitle(title);
  }

  ngOnInit(): void {
    this.setTitle('Pricing page')
  }

}
