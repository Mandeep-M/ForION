import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
//import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { AppComponent } from './app.component';
//import { AppSpnrComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
//import { RouterModule} from '@angular/router';
//import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';

@NgModule({
  declarations: [
  AppComponent], 
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
	Keyboard,
	//SpinnerDialog,
    //TextToSpeech,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [
  AppComponent]
})
export class AppModule {}
