import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { addSyntheticTrailingComment } from 'typescript';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title = "Grocery List";

  items = [
    {
      name: "Milk",
      quantity: 2
    },

    {
      name: "Bread",
      quantity: 1
    },

    {
      name: "Eggs",
      quantity: 12
    },

    {
      name: "Peanut butter",
      quantity: 1
    },
  ];

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController) {

  }

  showAddItemPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Add Item',
      message: 'Please enter item: ',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },

        {
          name: 'quantity',
          placeholder: 'Quantity'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log('Save clicked', item);
            this.items.push(item);
          }
        }
      ]
    });
    prompt.present();
  }

  removeItem(item, index) {
    console.log("Removing item: ", item, index)
    const toast = this.toastCtrl.create({
      message: 'Removing item: ' + (index + 1),
      duration: 3000
    });
    toast.present();

    this.items.splice(index, 1);
  }

}
