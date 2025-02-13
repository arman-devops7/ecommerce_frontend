import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, MenuController } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { SearchbarComponent } from '../searchbar/searchbar.component';
import { ButtonComponent } from "../button/button.component";

interface MenuItem {
  title: string;
  url: string;
}

@Component({
  selector: 'header',
  standalone: true,
  imports: [CommonModule, IonicModule, SearchbarComponent, RouterLink, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public readonly menuItems: MenuItem[] = [
    { title: 'Home', url: '/' },
    { title: 'Products', url: '/products' },
    { title: 'About', url: '/about' },
    { title: 'Contact', url: '/contact' },
  ];

  constructor(private readonly menuController: MenuController) { }

  closeMenu = async () => this.menuController.close('main-menu');

  ngOnInit(): void { }

  ngOnDestroy(): void { }
}
