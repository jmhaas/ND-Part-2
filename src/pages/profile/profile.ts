import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home', // needs to be changed
  templateUrl: 'profile.html'
})

export class Profile {
    private name:string;
    private location;
    private password:string; // switch to server side 
}