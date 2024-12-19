import { Component } from '@angular/core';
import { IonHeader, IonContent, IonList, IonItem, IonSelectOption, IonSelect } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonContent, IonList, IonItem, IonSelectOption, IonSelect, FormsModule],
})
export class HomePage {

  figuraSeleccionada = "";

  constructor(private router: Router){}



  onFigura(){
    console.log(this.figuraSeleccionada)

    if(this.figuraSeleccionada === "triangulo")
      this.router.navigate(['/triangulo'])
    else
      this.router.navigate(['/circulo'])

  }
}
