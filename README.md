
# Catàleg d'Elements - Unitat 2

Aplicació Angular que implementa el cas d'ús 2.4.1: Interfície completa amb components i formularis.

## Funcionalitats

- ✅ Targeta reutilitzable amb subcomponent d'etiqueta
- ✅ Llistat dinàmic amb iteració optimitzada i panell de detall
- ✅ Formulari de filtres (text i categoria) amb validacions i restabliment
- ✅ Filtratge combinat
- ✅ Estats visuals (carregant, buit, resultats)
- ✅ Mesures d'accessibilitat implementades (labels, ARIA, teclat, focus visible)
- ✅ Responsive design

## Estructura del projecte

```
src/app/
├── models/
│   └── element.model.ts          # Interfície Element
├── mocks/
│   └── dades-mock.ts              # Dades simulades (10 elements)
├── components/
│   ├── etiqueta-element/          # Subcomponent etiqueta (badge)
│   ├── targeta-element/           # Component targeta (@Input/@Output)
│   ├── llista-elements/           # Component llistat (@for, @empty)
│   └── barra-filtres/             # Formulari de filtres (FormsModule)
└── app.component.*                # Component arrel (estat, filtratge, detall)
```

## Execució

```bash
npm install
ng serve --open
```

Aplicació disponible a `http://localhost:4200`

## Conceptes integrats

- Lectura 2.1.1 → Creació de components
- Lectura 2.1.2 → Interpolació i vinculació de propietats
- Lectura 2.1.3 → Esdeveniments, @Input i @Output
- Lectura 2.2.1 → Iteració (@for, track, @empty)
- Lectura 2.2.2 → Control condicional (@if/@else)
- Lectura 2.2.3 → Pipes (date)
- Lectura 2.3.1 → Formularis (FormsModule, [(ngModel)])
- Lectura 2.3.2 → Validacions (required, minlength)
- Lectura 2.3.3 → Accessibilitat (ARIA, labels, focus)
```
