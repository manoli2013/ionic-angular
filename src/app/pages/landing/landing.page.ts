import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  user: string;

  constructor() { }

  ngOnInit() {

      // invoque service retrieveUser()

  }

  

  updateUser() {

    // updateUser logic(id, this.user)
    // Aquest service cridarà a la API de users

  }

}
