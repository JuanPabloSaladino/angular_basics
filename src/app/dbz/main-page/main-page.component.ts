import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  newCharacter  : Character = {
    name: '',
    power: 0
  }

  //characters    : Character[] = [];

  //Service injection
  /*get characters() : Character[] {
    return this.dbzService.characters;
  }*/

  /*addNewCharacter( character : Character ) {
    this.characters.push(character);
  }*/

  //Service injection
  /*constructor( private dbzService : DbzService ) {
    this.characters = this.dbzService.characters;
  }*/
}
