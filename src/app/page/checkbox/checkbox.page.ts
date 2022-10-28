import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {

  meses: any[] = [
    {nomeDoMes: 'Janeiro', valor: 1, marcado:false},
    {nomeDoMes: 'Fevereiro', valor: 2, marcado:true},
    {nomeDoMes: 'Março', valor: 3, marcado:true},
    {nomeDoMes: 'Abril', valor: 4, marcado:true},
    {nomeDoMes: 'Maio', valor: 5, marcado:false},
  ]
  constructor() { }

  ngOnInit() {
    console.log(this.meses)
    // Aqui será mostrado a posição dos meses no ínicio, pelo console
  }

  exibirMeses(){
    console.log(this.meses)
    // aqui será mostrado a posição dos meses após o clique, pelo console
  }
}
