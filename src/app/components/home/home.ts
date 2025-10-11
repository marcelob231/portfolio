import { Component, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Header } from "../header/header";
import { Menu } from "../menu/menu";

@Component({
  selector: 'app-home',
  imports: [Header, Menu],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  @ViewChild('solar_consult', { read: ViewContainerRef, static: true }) solar_consult!: ViewContainerRef;
  
  private solar_consult_loaded: ComponentRef<any> | null = null;
}
