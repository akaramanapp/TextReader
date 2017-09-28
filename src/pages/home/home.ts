import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  description: string;
  constructor(public navCtrl: NavController, private tts: TextToSpeech) {

  }

  speak(){
    this.tts.speak(this.description)
    .then(() => console.log('Success'))
    .catch((reason: any) => console.log(reason));
  }
}
