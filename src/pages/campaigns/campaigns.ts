import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Campaign } from '../campaign/campaign';

@Component({
  selector: 'campaigns-page', // needs to be changed
  templateUrl: 'campaigns.html'
})
export class CampaignsPage {
  selectedItem: any;
  items: Array<{title: string, note: string, icon: string}>;
  campaigns: Array<{campaign: Campaign}>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
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
      note: this.campaigns[0].campaign.getDate(),
      icon: 'megaphone'
    })
    // this.items[0] = {
    //   
    // }

  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(CampaignsPage, {
      item: item
    });
  }
}