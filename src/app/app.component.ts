import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public selectedIndex = 0;
  public appPages = [
    { 
      title: 'Navegação', 
      url: 'navegacao', 
      icon: 'paper-plane' 
    },
    { 
      title: 'Navegação 2', 
      url: 'navegacao2', 
      icon: 'paper-plane' 
    },
    { 
      title: 'Alert', 
      url: 'alert', 
      icon: 'chatbox' 
    },
    {
      title: 'Toast',
      url: 'toast',
      icon: 'chatbubble'
    },
    {
      title: 'Action-Sheet',
      url: 'actionsheet',
      icon: 'construct'
    },
    {
      title: 'Badge',
      url: 'badge',
      icon: 'albums'
    },
    {
      title: 'Card',
      url: 'card',
      icon: 'card'
    },
    {
      title: 'Checkbox',
      url: 'checkbox',
      icon: 'checkbox'
    },
    {
      title: 'Input',
      url: 'input',
      icon: 'enter'
    },
    {
      title: 'Listas',
      url: 'listas',
      icon: ''
    },

   
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
