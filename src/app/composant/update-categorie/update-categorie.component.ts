import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {ProduitsService} from "../../services/produits.service";
import {Categorie} from "../../model/categorie.modele";

@Component({
  selector: 'app-update-categorie',
  templateUrl: './update-categorie.component.html',
  styleUrl: './update-categorie.component.css'
})
export class UpdateCategorieComponent implements OnInit {
  @Input()
  categorie! : Categorie;
  @Input()
  ajout!:boolean;
  @Output()
  categorieUpdate = new EventEmitter<Categorie>();
  constructor(private produitService: ProduitsService) {
  }

  ngOnInit(): void {
    console.log("ngonit du composant update" + this.categorie)
  }

  saveCategorie() {
    this.categorieUpdate.emit(this.categorie)
  }
}
