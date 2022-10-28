import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro2',
  templateUrl: './cadastro2.page.html',
  styleUrls: ['./cadastro2.page.scss'],
})
export class Cadastro2Page implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  voltar(){
    this.navCtrl.navigateForward('cadastro1');
  }
}
