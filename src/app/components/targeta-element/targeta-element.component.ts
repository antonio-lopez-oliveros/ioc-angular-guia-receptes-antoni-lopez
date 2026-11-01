import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Element } from '../../models/element.model';
import { EtiquetaElementComponent } from '../etiqueta-element/etiqueta-element.component';

@Component({
  imports: [EtiquetaElementComponent, DatePipe],
  selector: 'app-targeta-element',
  styleUrl: './targeta-element.component.scss',
  templateUrl: './targeta-element.component.html',
})
export class TargetaElementComponent {

  //propietats rep per parametre al crear-se el component
  @Input ({required: true}) element!: Element;
  @Input () seleccionada: boolean = false;
  //event personalitzat selecciona que passa tipus Element
  @Output() selecciona = new EventEmitter<Element>();

  //metode asociat al event click del button llená event personalitzat
  avisaSeleccio(): void {
    this.selecciona.emit(this.element);
  }

}
