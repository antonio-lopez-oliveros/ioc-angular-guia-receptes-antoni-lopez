import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TargetaElementComponent } from '../targeta-element/targeta-element.component';
import { Element } from '../../models/element.model';

@Component({
  imports: [TargetaElementComponent],
  selector: 'app-llista-elements',
  styleUrl: './llista-elements.component.scss',
  templateUrl: './llista-elements.component.html',
})
export class LlistaElementsComponent {

  //propieat rep per parametre obligatori llista d'Element. Valor per defecte llista buida
  @Input({required: true}) elements: Element[] = [];
  @Input() elementSeleccionatId?: number;
  //event personalitzat
  @Output() selecciona = new EventEmitter<Element>();

  //metode associat a event llença tarjeta-element, llença event personalitzat selecciona amb Element
  propagaSeleccio(element: Element){
    this.selecciona.emit(element)
  }

}
