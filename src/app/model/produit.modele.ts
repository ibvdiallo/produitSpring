import {Categorie} from "./categorie.modele";

export class Produit{
  idProduit? :any;
  nomProduit? :string;
  prixProduit? :number;
  dateCreation? :Date;
  categorie? : Categorie;
}
