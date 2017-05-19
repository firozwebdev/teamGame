import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TeamDetail} from "../team-detail/team-detail";
import {Standing} from "../standing/standing";

/**
 * Generated class for the TeamHome page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-team-home',
  templateUrl: 'team-home.html',
})
export class TeamHome {

  teamDetailTab:any;
  standingTab:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.teamDetailTab = TeamDetail;
    this.standingTab = Standing;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamHome');
  }

}
