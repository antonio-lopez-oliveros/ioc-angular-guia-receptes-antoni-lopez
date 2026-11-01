
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarraFiltresComponent, FiltresElement } from './components/barra-filtres/barra-filtres.component';
import { LlistaElementsComponent } from './components/llista-elements/llista-elements.component';
import { ELEMENTS_MOCK } from './mocks/dades-mock';
import { Element } from './models/element.model';

@Component({
  imports: [RouterOutlet, BarraFiltresComponent, LlistaElementsComponent],
  selector: 'app-root',
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
})
export class App {
  elements: Element[] = [];
  elementsFiltrats: Element[] = [];
  elementSeleccionat: Element | undefined = undefined;
  filtresActuals: FiltresElement = { text: '', categoria: 'Totes' };
  carregant = signal(true);

  constructor() {
    // Simulació de càrrega: a la Unitat 3 aquí hi haurà una petició HTTP
    setTimeout(() => {
      this.elements = ELEMENTS_MOCK;
      this.elementsFiltrats = ELEMENTS_MOCK;
      this.carregant.set(false);   // el canvi del signal fa que Angular refresqui la vista
    }, 800);
  }

  actualitzaFiltres(filtres: FiltresElement): void {
    this.filtresActuals = filtres;
    const text = filtres.text.trim().toLocaleLowerCase('ca');

    this.elementsFiltrats = this.elements.filter((element) => {
      const categoriaCoincideix = filtres.categoria === 'Totes' || element.categoria === filtres.categoria;
      const textCoincideix = text === '' || this.conteText(element, text);
      return categoriaCoincideix && textCoincideix;
    });

    // Si l'element seleccionat ha quedat fora del filtre, tanquem el detall
    if (this.elementSeleccionat && !this.elementsFiltrats.includes(this.elementSeleccionat)) {
      this.elementSeleccionat = undefined;
    }
  }

  seleccionaElement(element: Element): void {
    this.elementSeleccionat = element;
  }

  tancaDetall(): void {
    this.elementSeleccionat = undefined;
  }

  private conteText(element: Element, text: string): boolean {
    const contingut = `${element.nom} ${element.descripcio}`.toLocaleLowerCase('ca');
    return contingut.includes(text);
  }
}