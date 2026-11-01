import { Component, Input } from '@angular/core';
import { CategoriaElement } from '../../models/element.model';

@Component({
  imports: [],
  selector: 'app-etiqueta-element',
  styleUrl: './etiqueta-element.component.scss',
  templateUrl: './etiqueta-element.component.html',
})
export class EtiquetaElementComponent {

  //propietats rep per parametre
  //required: true es obligatori pasar valor per parametre
  //amb ! dic que passare el valor segur, que no es preocupi
  @Input({required: true}) categoria!: CategoriaElement;
  //dono valor per defecte
  @Input() destacat = false;
}
