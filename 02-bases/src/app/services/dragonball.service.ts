import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

//Leer de local storage
const loadFromLocalStorage = (): Character[] => {
  const characters = localStorage.getItem('characters');

  return characters ? JSON.parse(characters) : [];
};

@Injectable({ providedIn: 'root' })
export class DragonballService {
  constructor() {}

  characters = signal<Character[]>(loadFromLocalStorage());

  // Guardar en Local Storage
  saveToLocalStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  });

  addCharacter(character: Character): void {
    this.characters.update((list) => [...list, character]);
  }
}
