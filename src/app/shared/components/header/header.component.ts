import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SearchbarComponent } from '../searchbar/searchbar.component';
import { RouterLink } from '@angular/router';

interface MenuItem {
  title: string;
  url: string;
}

@Component({
  selector: 'header', // Use 'app-header' for better Angular naming conventions
  standalone: true,
  imports: [CommonModule, IonicModule, SearchbarComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public menuItems: MenuItem[] = [
    {
      title: 'home',
      url: '/',
    },
    {
      title: 'products',
      url: '/products',
    },
    {
      title: 'about',
      url: '/about',
    },
    {
      title: 'contact',
      url: '/contact',
    },
  ];

  constructor() { }

  ngOnInit() { }
}