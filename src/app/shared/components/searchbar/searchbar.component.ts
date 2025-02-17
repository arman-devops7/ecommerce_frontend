import { Component, OnInit } from '@angular/core';
import { IonSearchbar } from "@ionic/angular/standalone";

@Component({
  selector: 'searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
  imports: [IonSearchbar],
  standalone: true
})
export class SearchbarComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
