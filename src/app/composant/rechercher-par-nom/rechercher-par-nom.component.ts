import {Component, OnInit} from '@angular/core';
import {Produit} from "../../model/produit.modele";
import {ProduitsService} from "../../services/produits.service";

@Component({
  selector: 'app-rechercher-par-nom',
  templateUrl: './rechercher-par-nom.component.html',
  styleUrl: './rechercher-par-nom.component.css'
})
export class RechercherParNomComponent implements  OnInit {
  produits! : Produit[]
  nomProduit! : string
  allProduit!: Produit[]
  searchTerm! : string;
  constructor(private produitService: ProduitsService) {
  }
  rechercheProds(){
    this.produitService.rechercherParNom(this.nomProduit).subscribe(produit => {
      this.produits = produit
      console.log(produit)
    })
  }

  ngOnInit(): void {
    this.produitService.listProduit().subscribe(produit =>{
      this.produits = produit;
    })
  }

  onKeyUp(filterText: string) {
      this.produits = this.allProduit.filter(item=>
      item.nomProduit?.toLowerCase().includes(filterText)
      )
  }
}
