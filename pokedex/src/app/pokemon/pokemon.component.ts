import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  private pokemons: Pokemon[];
  private title: string = 'Pokémons';
  constructor() { }

  ngOnInit() {
    this.pokemons = POKEMONS;
  }
  selectPokemon(pokemon: Pokemon) {
    alert('Vous avez cliqué sur' + pokemon.name);
  }
  onClick() {
    console.log('click!');
  }

}
