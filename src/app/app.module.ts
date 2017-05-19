import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Game} from "../pages/game/game";
import {MyTeams} from "../pages/my-teams/my-teams";
import {TeamDetail} from "../pages/team-detail/team-detail";
import {Teams} from "../pages/teams/teams";
import {Tournaments} from "../pages/tournaments/tournaments";
import {TeamHome} from "../pages/team-home/team-home";
import {Standing} from "../pages/standing/standing";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Game,
    MyTeams,
    TeamDetail,
    Teams,
    Tournaments,
      TeamHome,
      Standing
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Game,
    MyTeams,
    TeamDetail,
    Teams,
    Tournaments,
    TeamHome,
    Standing
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}

  ]
})
export class AppModule {}
