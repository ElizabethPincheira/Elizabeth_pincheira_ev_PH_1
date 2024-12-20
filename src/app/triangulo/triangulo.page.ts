import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonInput, IonList, IonItem, IonButton, IonCard, IonCardHeader,
  IonCardSubtitle, IonCardTitle, IonCardContent, IonImg } from '@ionic/angular/standalone';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.page.html',
  styleUrls: ['./triangulo.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonInput, IonList, IonItem, 
    IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonImg]
})
export class TrianguloPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
