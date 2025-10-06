import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class Menu {

  call_about(id_path: number){
    console.log(id_path);
  }

}
