import { Component } from '@angular/core';
import { IonHeader, IonContent, IonList, IonItem, IonSelectOption, IonSelect } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CirculoPage } from '../circulo/circulo.component';
import { TrianguloPage } from '../triangulo/triangulo.page'



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonContent, IonList, IonItem, IonSelectOption, IonSelect, FormsModule, CommonModule, CirculoPage, TrianguloPage],
})
export class HomePage {

  figuraSeleccionada = "";
  constructor(private router: Router){}



  onFigura(){
    console.log(this.figuraSeleccionada)

   

  }
}
