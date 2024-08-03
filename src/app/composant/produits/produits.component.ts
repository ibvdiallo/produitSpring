import {Component, OnInit} from '@angular/core';
import {Produit} from "../../model/produit.modele";
import {ProduitsService} from "../../services/produits.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
})
export class ProduitsComponent implements OnInit {
  produits? : Produit[];

  constructor(private produitsService : ProduitsService,public authService : AuthService){}

  ngOnInit() {
  //  this.produits =  this.produitsService.listProduit();
    this.chargerProduit()
  }

  chargerProduit(){
    this.produitsService.listProduit().subscribe(
      prods =>{
        console.log(prods)
        this.produits = prods;
      }
    );
  }

  // supprimerProduit(produit: Produit) {
  //   //console.log(produit)
  //   let confirmation = confirm("etre vous sur se supprimer le produit "+produit.nomProduit+ " ?");
  //
  //   if (confirmation){
  //     this.produitsService.supprimerProduitService(produit);
  //   }
  // }
  supprimerProduit(produit: Produit){
    let confirmation = confirm("etre vous sur se supprimer le produit ")
      if (confirmation){
       this.produitsService.supprimerProduitService(produit.idProduit).subscribe(()=>{
         console.log("produit surppirm")
         this.chargerProduit()
       })
      }
  }

}
