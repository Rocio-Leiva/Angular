import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {

  //pasar info del padre al hijo
  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10

  }]

}
