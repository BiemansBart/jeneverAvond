export class Jenever {
  naam: String;
  type: String;
  rating: number;
  beschrijving: String;
  aantalStemmen: number;
  id: number;


  constructor(naam: String, type: String, rating: number, beschrijving: String, aantalstemmen: number, id: number) {
    this.naam = naam;
    this.type = type;
    this.rating = rating;
    this.beschrijving = beschrijving;
    this.aantalStemmen = aantalstemmen;
    this.id = id;
  }
}
