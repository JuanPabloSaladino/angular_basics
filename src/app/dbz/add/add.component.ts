import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent { 
  @Input()
  newCharacter    : Character = {
    name  : '',
    power : 0
  };

  constructor( private dbzService : DbzService) { }

  addCharacter( ) {
    if(this.newCharacter.name.trim().length === 0){
      return
    }else{
      this.dbzService.addCharacter( this.newCharacter );

      this.newCharacter = {
        name  : '',
        power : 0,
      }
    }
  }
}
