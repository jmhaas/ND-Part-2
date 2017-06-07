import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Profile } from '../profile/profile';

@Component({
  selector: 'page-home', // needs to be changed
  templateUrl: 'campaign.html'
})
export class CampaignPage {

  constructor(public navCtrl: NavController) {

  }

}

export class Campaign {
    private title:string;
    private date:string;
    private location:string;
    private description:string;
    private profiles:Profile[];

    constructor(_title, _date, _location, _description) {
        this.title = _title;
        this.date = _date;
        this.location = _location;
        this.description = _description;
    }

    addProfile = function(profile) {
        this.profiles.push(profile);
    }
}
