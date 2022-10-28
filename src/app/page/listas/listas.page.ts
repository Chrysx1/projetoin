import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.page.html',
  styleUrls: ['./listas.page.scss'],
})

export class ListasPage implements OnInit {
  tasks: any [] = []

 

  constructor(private alertCtrl: AlertController, private toastCtrl: ToastController, private actionSheetCtrl: ActionSheetController) 
  { 
    let taskJson = localStorage.getItem('taskDb')
         
    if (taskJson != null){
       this.tasks = JSON.parse(taskJson); 
       // transformando um string em objeto java-script
    }
  }
    deletar(task : any){
    this.tasks = this.tasks.filter(taskArray=> task != taskArray); // filtra o array diferente do parametro task passado 
    this.updateLocalStorage();
  }




  async showAdd(){
    const alert = await this.alertCtrl.create({
      header: 'O que deseja fazer?',
      inputs: [{
        name: 'task',
        type: 'text',
        placeholder: 'O que deseja fazer',
      }],
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Clicked cancel');
        }
        }, 
      {
          text: 'Adicionar',
          handler: (form) => {
            this.add(form.task);
          }
      }]
    })
    await alert.present();
  }

  async add(newTask: string){
    // valida se o úsuario preencheu a TASK
    if (newTask.trim().length < 1){
      const toast = await this.toastCtrl.create({
        message: 'Infome o que deseja fazer',
        duration: 2000,
        position: 'top',
        color: 'danger',
      });
      toast.present();
      return;
    }
    let task = {name: newTask, done:false};
    this.tasks.push(task);

    this.updateLocalStorage();
  }

   

  async openActions(task : any){
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'O QUE DESEJA FAZER?',
      buttons: [{
        text: task.done ? 'Desmarcar':'Marcar',
        icon: task.done ? 'radio-button-off':'checkmark-circle',
        handler: () => {
          task.done = !task.done;
          this.updateLocalStorage();
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
   
    await actionSheet.present();
  }


  updateLocalStorage() {
    // converter o array (objeto java-script) em texto
    localStorage.setItem('taskDb', JSON.stringify(this.tasks));
    
  }
  ngOnInit() {
  }

}
