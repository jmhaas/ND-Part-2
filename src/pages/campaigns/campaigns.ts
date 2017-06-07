import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Campaign, CampaignPage } from '../campaign/campaign';

@Component({
  selector: 'campaigns-page', // needs to be changed
  templateUrl: 'campaigns.html'
})
export class CampaignsPage {
  selectedItem: any;
  items: Array<{title: string, date:string, note: string, location:string, icon: string}>;
  campaigns: Array<{campaign: Campaign}>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.campaigns = [];
    this.campaigns[0] = ({campaign:new Campaign("Clean Up The Park", "7/10/2016", "Brandywine Park", "Lets clean up")});

    this.items = [];
    // for (let i = 1; i < 11; i++) {
    //   this.items.push({
    //     title: 'Item ' + i,
    //     note: 'This is item #' + i,
    //     icon: 'bluetooth'
    //   });
    // }
    this.items.push({
      title: this.campaigns[0].campaign.getTitle(),
      date: this.campaigns[0].campaign.getDate(),
      note: this.campaigns[0].campaign.getDescription(),
      location: this.campaigns[0].campaign.getLocation(),
      icon: 'megaphone'
    })

  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(CampaignPage, {
      item: item
    });
  }
}