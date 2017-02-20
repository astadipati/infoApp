import { NavParams, NavController } from 'ionic-angular';
import { Component } from '@angular/core';
@Component(){
    selector: 'page-user',
    templateUrl: 'user.html'
}
export class UserPage implements {

    constructor(
        private navParams: NavParams,
        private navCtrl: NavController) {}
        ngOnInit(){
            this.name = this.navParams.get('userName');
        }
    )
}