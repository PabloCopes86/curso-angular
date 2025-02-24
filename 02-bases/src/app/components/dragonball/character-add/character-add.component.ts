import {
  ChangeDetectionStrategy,
  Component,
  output,
  signal,
} from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  templateUrl: './character-add.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterAddComponent {
  name = signal('');
  power = signal(0);

  // output para mandar al listado del otro componente
  newCharacter = output<Character>();

  addCharacter(): void {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    const newCharacter: Character = {
      id: Math.floor(Math.random() * 10000),
      name: this.name(),
      power: this.power(),
    };

    // this.characters().push(newCharacter);
    // this.characters.update((list) => [...list, newCharacter]);
    this.newCharacter.emit(newCharacter);

    this.resetFields();
  }
  resetFields(): void {
    this.name.set('');
    this.power.set(0);
  }
}
