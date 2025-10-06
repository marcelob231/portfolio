import { Component } from '@angular/core';
import { Header } from "../header/header";
import { Menu } from "../menu/menu";

@Component({
  selector: 'app-home',
  imports: [Header, Menu],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
