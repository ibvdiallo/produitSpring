import {Component, OnInit} from '@angular/core';
import {ProduitsService} from "../../services/produits.service";
import {Categorie} from "../../model/categorie.modele";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-list-categoires',
  templateUrl: './list-categoires.component.html',
  styleUrl: './list-categoires.component.css'
})
export class ListCategoiresComponent implements  OnInit {

  categories? : Categorie[]
  ajout:boolean = true
  updateCategorie: Categorie = {"idCategorie":0,"nomCategorie":''}
  constructor(private produitService: ProduitsService,public authservice: AuthService) {
  }

  ngOnInit(): void {
   this.chargerCategoire()
  }

  updateCategories(categorie: Categorie) {
    console.log("categories recu de update caegorie" + categorie)
    this.produitService.ajouterCategorie(categorie).subscribe(()=>this.chargerCategoire())
  }

   chargerCategoire() {
     this.produitService.listerCategorie().subscribe(cats =>{
       this.categories = cats._embedded.categories
     })
   }

  updateCat(cat: Categorie) {
    this.updateCategorie = cat;
    this.ajout=false
  }

  supprimer(categorie: Categorie) {
    let confirmation = confirm("etre vous sur se supprimer le produit ")
    if (confirmation){
    this.produitService.supprimerCategorie(categorie.idCategorie).subscribe(()=>{
      console.log("produit surppirm")
      this.chargerCategoire()
    })
    }
  }
}
