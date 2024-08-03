import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProduitsService} from "../../services/produits.service";
import {Produit} from "../../model/produit.modele";
import {Categorie} from "../../model/categorie.modele";

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrl: './update-produit.component.css'
})
export class UpdateProduitComponent implements OnInit{

  currentProduit = new Produit();
  message?: string;
  categorie ! :Categorie[];
  updateCategorieId? : number;
  constructor(private activateRoute: ActivatedRoute,private router : Router,private produitService: ProduitsService) {

  }
  ngOnInit(): void {
    //console.log(this.activateRoute.snapshot.params['id'])
    //this.categorie = this.produitService.listerCategorie();
    // this.currentProduit = this.produitService.consulterProduit(this.activateRoute.snapshot.params['id'])
    // this.updateCategorieId = this.currentProduit.categorie?.idCategorie;
    // console.log(this.currentProduit);
    this.produitService.listerCategorie()
      .subscribe(categorie =>{this.categorie= categorie._embedded.categories})
    this.produitService.consulterProduit(this.activateRoute.snapshot.params['id'])
      .subscribe(prod => {
        this.currentProduit = prod;
        this.updateCategorieId = this.currentProduit.categorie?.idCategorie})
  }

  updateProduit() {
    // console.log(this.currentProduit);
    // //this.currentProduit.categorie = this.produitService.consulterCategorie(this.updateCategorieId)
    //
    // this.produitService.modifierProduit(this.currentProduit)
     this.currentProduit.categorie  = this.categorie.find(categorie => categorie.idCategorie == this.updateCategorieId)!
      this.produitService.modifierProduit(this.currentProduit).subscribe(produit => {
        this.router.navigate(['produits'])
      })
    this.router.navigate(["produits"])
    this.message ="Produit "+ this.currentProduit.nomProduit+" Modifier avec succes !"
  }
}
