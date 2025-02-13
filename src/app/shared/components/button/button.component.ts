import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonButton, IonIcon } from "@ionic/angular/standalone";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports: [IonIcon, CommonModule, IonButton, RouterModule]
})
export class ButtonComponent implements OnInit {

  @Input() text: string = "Click Me"; // Default text
  @Input() type: 'button' | 'submit' | 'reset' = "button"; // Button types
  @Input() color?: string = "primary"; // Ionic color theme
  @Input() expand: 'full' | 'block' | 'default' = "default"; // Button expansion
  @Input() shape: 'round' | 'default' = "default"; // Rounded button
  @Input() disabled: boolean = false; // Disabled state
  @Input() icon?: string; // Optional icon
  @Input() fill = "clear"; // Optional icon
  @Input() routerLink?: string; // Router link (if applicable)
  @Input() customClass: string = ""; // Custom CSS class
  @Input() customStyle: { [key: string]: string } = {}; // Custom inline styles

  constructor() { }

  ngOnInit() { }
}
