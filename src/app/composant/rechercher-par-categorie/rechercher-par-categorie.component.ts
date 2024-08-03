import {Component, OnInit} from '@angular/core';
import {Produit} from "../../model/produit.modele";
import {Categorie} from "../../model/categorie.modele";
import {ProduitsService} from "../../services/produits.service";

@Component({
  selector: 'app-rechercher-par-categorie',
  templateUrl: './rechercher-par-categorie.component.html',
  styleUrl: './rechercher-par-categorie.component.css'
})
export class RechercherParCategorieComponent implements  OnInit {
    produits! : Produit[];
    idCategorie! : number
    categories! : Categorie[]
    constructor(private produitService: ProduitsService){}

    ngOnInit(): void {
      this.produitService.listerCategorie()
        .subscribe(cat =>{this.categories = cat._embedded.categories
        console.log(cat)
          console.log(this.produits)
        })
    }
    onChange(){
        this.produitService.rechercherParCategorie(this.idCategorie).subscribe(produits => {this.produits = produits})
    }

}
