import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.page.html',
  styleUrls: ['./vagas.page.scss'],
})
export class VagasPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  voltar(){
    this.navCtrl.navigateForward('home');
  }
}

