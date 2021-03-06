import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {TeamHome} from "../team-home/team-home";

/**
 * Generated class for the Teams page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class Teams {

  teams = [
    {id: 1, name: 'HC Elite'},
    {id: 2, name: 'Team TakeOver'},
    {id: 3, name: 'DC Thunder'},
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Teams');
  }

  itemTapped($event,team){
    this.navCtrl.push(TeamHome,team);
  }

}
