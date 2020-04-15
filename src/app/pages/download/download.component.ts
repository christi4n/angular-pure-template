import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {
  constructor(private titleService: Title) {}

  // Getters and Setters for page title
  getTitle() {
    this.titleService.getTitle();
  }

  setTitle(title: string) {
    this.titleService.setTitle(title);
  }

  ngOnInit(): void {
    this.setTitle('Downloads Pure')
  }

}
