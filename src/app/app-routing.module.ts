import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProduitsComponent} from "./composant/produits/produits.component";
import {AddProduitComponent} from "./composant/add-produit/add-produit.component";
import {UpdateProduitComponent} from "./composant/update-produit/update-produit.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {RechercherParCategorieComponent} from "./composant/rechercher-par-categorie/rechercher-par-categorie.component";
import {RechercherParNomComponent} from "./composant/rechercher-par-nom/rechercher-par-nom.component";
import {ListCategoiresComponent} from "./composant/list-categoires/list-categoires.component";
import {LoginComponent} from "./composant/login/login.component";
import {ForbiddenComponent} from "./composant/forbidden/forbidden.component";
import {ProduitGuard} from "./produit.guard";

const routes: Routes = [
  {
    path : "produits",
    component: ProduitsComponent,
  },
  {
    path : "add-produits",
    component : AddProduitComponent,
    canActivate : [ProduitGuard]
  },
  {
    path : "update-produit/:id",
    component : UpdateProduitComponent
  },
  {
    path : "rechercherParCategorie",
    component : RechercherParCategorieComponent
  },
  {
    path : "rechercheParNom",
    component : RechercherParNomComponent,
  },
  {
    path : "listeCategorie",
    component : ListCategoiresComponent,
  },
  {
    path : "login",
    component : LoginComponent,
  },
  {
    path : "forbiden",
    component : ForbiddenComponent,
  },
  {
    path : "",
    redirectTo: "produits", pathMatch : "full"
  },
  {
    path: "**",
    redirectTo: 'notfound', pathMatch: 'full'
  },
  {
    path : "notfound",
    component : NotfoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
