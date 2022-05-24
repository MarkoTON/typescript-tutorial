export interface HasFormatter {
  // format() mora da vrati string, i onda unutar class Invoice metoda format mora da vrati string. 
  // Ko god koristi HasFormatter mora da ima unutar sebe format() koji ce vracati string
  format(): string;
}