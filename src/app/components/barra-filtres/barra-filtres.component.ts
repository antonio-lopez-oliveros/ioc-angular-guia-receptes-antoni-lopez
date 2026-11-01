
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CategoriaElement } from '../../models/element.model';

// creo interface modela els filtres seleccionats
export interface FiltresElement {
  text: string;
  categoria: CategoriaElement | 'Totes';
}

@Component({
  imports: [FormsModule],
  selector: 'app-barra-filtres',
  styleUrl: './barra-filtres.component.scss',
  templateUrl: './barra-filtres.component.html',
})
export class BarraFiltresComponent {
  //event personalitzat passa FiltresElement
  @Output() filtresCanviats = new EventEmitter<FiltresElement>();
  //a les categories possibles afegeixo 'Totes'
  categories: Array<CategoriaElement | 'Totes'> = ['Totes', 'Entrants' , 'Primer plat' , 'Segon plat' , 'Postres'];
  //valors del filtres sel·leccionats
  filtres: FiltresElement = {
    text: '',
    categoria: 'Totes',
  };

  aplicaFiltres(): void {
    this.filtresCanviats.emit({ ...this.filtres });
  }
  //reinicio valor filtres
  restableixFiltres(): void {
    this.filtres = { text: '', categoria: 'Totes' };
    this.aplicaFiltres();
  }
}