import {Component, OnInit} from '@angular/core';
import {Produit} from "../../model/produit.modele";
import {ProduitsService} from "../../services/produits.service";
import {Categorie} from "../../model/categorie.modele";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrl: './add-produit.component.css'
})
export class AddProduitComponent implements  OnInit {
  newProduit = new Produit();
  message? : string;
  categories? : Categorie[];
  newIdCat ? : number;
  newCategorie? : Categorie;
  constructor(private produitsService: ProduitsService,private route : Router) {
  }
  ngOnInit(): void {
    //this.categories = this.produitsService.listerCategorie()
    this.produitsService.listerCategorie()
      .subscribe(categories => {
        this.categories = categories._embedded.categories;
      })
  }

  addProduit() {
  //   //console.log(this.newProduit);
  //   this.newCategorie = this.produitsService.consulterCategorie(this.newIdCat);
  //   this.newProduit.categorie = this.newCategorie;
  //   this.produitsService.ajouterProduit(this.newProduit)
  //   this.route.navigate(['produits'])
  //   this.message = "produit " +this.newProduit.nomProduit + " ajouter avec succes"
  //
    this.newProduit.categorie = this.categories?.find(cat => cat.idCategorie ==this.newIdCat)!
    this.produitsService.ajouterProduit(this.newProduit)
      .subscribe(prod =>{
        console.log(prod)
        this.route.navigate(['produits'])
      })
    }

}
