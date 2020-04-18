import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public messageForm = new FormGroup( 
    {
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email),
      subject: new FormControl('', Validators.required),
      text: new FormControl('', Validators.required)
    }
  );
  
  constructor(private titleService: Title) { }

  // Getters and Setters for page title
  getTitle() {
    this.titleService.getTitle();
  }

  setTitle(title: string) {
    this.titleService.setTitle(title);
  }

  ngOnInit(): void {
    this.setTitle('Contact Pure')
  }

  /* Action called by clicking on the submit btn */
  sendMessage() {

  }

}
