import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent, IonItem, IonList } from '@ionic/angular/standalone';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone: true,
  imports: [IonList, IonItem, IonContent, FormsModule]
})
export class ProductsPage implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("NgOnInit -- Products Page initialized");

  }

  ngOnDestroy(): void {
    console.log("NgOnDestroy -- Products Page destroyed");

  }

}
