import { Injectable } from '@angular/core';
import {Produit} from "../model/produit.modele";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {apiURL, apiURLCat} from "../config";
import {CategorieWrapped} from "../model/CategorieWrapped.model";
import {Categorie} from "../model/categorie.modele";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  //apiURL : string = 'http://localhost:8082/produits/api'
  produits! : Produit[];//un tableau de produit;
 // categorie? : Categorie[]
  //api: string = 'http://localhost:8082/produits/cat'
  constructor(private http: HttpClient){
   /* this.categorie = [
      {idCategorie:1,nomCategorie:"pc"},
      {idCategorie:2,nomCategorie:"Imprimante"}
    ]
    this.produits = [
      {idProduit:1,nomProduit:"Orange", prixProduit :2000, dateCreation : new Date("01/14/2024"),categorie:{idCategorie:2,nomCategorie:"Imprimante"}},
      {idProduit:2,nomProduit:"Pc", prixProduit :500, dateCreation : new Date("02/16/2024"),categorie:  {idCategorie:1,nomCategorie:"pc"}},
      {idProduit:3,nomProduit:"Iphone", prixProduit :9000, dateCreation : new Date("01/14/2024"),categorie: {idCategorie:2,nomCategorie:"Imprimante"}}
    ];*/
  }
  /*listProduit():Produit[]{
   return this.produits;
  }*/

  listProduit(): Observable<Produit[]>{
    return this.http.get<Produit[]>(apiURL)
  }
  // ajouterProduit(produit:Produit){
  //   this.produits.push(produit);
  //
  // }
  ajouterProduit(prod:Produit): Observable<Produit> {
    return this.http.post<Produit>(apiURL, prod,httpOptions);
  }
  // supprimerProduitService(produit: Produit) {
  //  const index = this.produits.indexOf(produit,0);
  //   if (index > -1){
  //     this.produits.splice(index,1)
  //   }
  //
  //  /* this.produits.forEach((cur, index) => {
  //   if(produit.idProduit== cur.idProduit){
  //       this.produits.splice(index,1);
  //     }
  //   });*/
  // }
  supprimerProduitService(id:number){
    const url = `${apiURL}/${id}`
    return this.http.delete(url,httpOptions)
  }

  // consulterProduit(id:number): Produit{
  //   return  this.produits.find(p => p.idProduit==id)!;
  //
  // }

  consulterProduit(id:number): Observable<Produit>{
      const url = `${apiURL}/${id}`
      return this.http.get<Produit>(url)
  }

  // modifierProduit(produit: Produit){
  //     //this.supprimerProduitService(produit)
  //     this.ajouterProduit(produit)
  //     this.trieProduit();
  // }
  modifierProduit(produit: Produit): Observable<Produit>{
    return this.http.put<Produit>(apiURL,produit,httpOptions)
  }
  trierProduit() {
    this.produits = this.produits.sort((n1, n2) => {
      if (n1.idProduit > n2.idProduit) {
        return 1;
      }
      if (n1.idProduit < n2.idProduit) {
        return -1;
      }
      return 0;
    });
  }
  trieProduit() {
    this.produits = this.produits.sort((n1, n2) => n1.idProduit - n2.idProduit);
  }
  //  listerCategorie() : Categorie []{
  //     return this.categorie!;
  //  }
  // listerCategorie() :Observable<Categorie[]>{
  //       return this.http.get<Categorie[]>(apiURL+'/cat')
  //   }
  listerCategorie() :Observable<CategorieWrapped>{
    return this.http.get<CategorieWrapped>(apiURLCat)
  }
  //
  // consulterCategorie(id: number | undefined): Categorie{
  //   return this.categorie?.find(cat => cat.idCategorie)!;
  // }

  rechercherParCategorie(idCategorie: number): Observable<Produit[]>{
    const url = `${apiURL}/prodscat/${idCategorie}`
    return this.http.get<Produit[]>(url)
  }
  rechercherParNom(nom: string): Observable<Produit[]> {
    const url = `${apiURL}/prodsByNom/${nom}`;
    return this.http.get<Produit[]>(url)
  }

  ajouterCategorie(categorie: Categorie): Observable<Categorie>{
    return this.http.post<Categorie>(apiURLCat,categorie,httpOptions)
  }
}
