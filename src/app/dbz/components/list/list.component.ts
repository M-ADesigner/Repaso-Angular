import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CharacterProps } from '../../interfaces/character.interfaces';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input()
  public characterList: CharacterProps[] = [
    {
      name: 'Trunks',
      power: 10,
    },
  ];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter<string>();

  public onDeleteCharacter(index?: string): void {
    this.onDelete.emit(index);
  }
}
