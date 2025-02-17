import { Component, OnInit } from '@angular/core';
import { IonList, IonTitle } from "@ionic/angular/standalone";

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [IonTitle, IonList,]
})

export class FooterComponent implements OnInit {

  public getYear: number = new Date().getFullYear();
  constructor() { }

  ngOnInit() {
    console.log("footer");

  }

}
