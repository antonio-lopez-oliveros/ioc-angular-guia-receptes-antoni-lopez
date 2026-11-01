//creo un alias d'un tipus de dades amb un conjunt de valors possibles
//export permet que el pugui importar des d'un altre fitxer
export type CategoriaElement = 'Entrants' | 'Primer plat' | 'Segon plat' | 'Postres';

export interface Element {
    id: number;
    nom: string;
    descripcio: string;
    dataActualitzacio: string;
    valoracio: number;
    calories: number;
    //propietat del type CategoriaElement
    categoria: CategoriaElement;
    //propietat opcional, potser no te valor associat
    destacat?: boolean;
}
