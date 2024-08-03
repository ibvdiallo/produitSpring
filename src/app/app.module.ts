import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitsComponent } from './composant/produits/produits.component';
import { AddProduitComponent } from './composant/add-produit/add-produit.component';
import {FormsModule} from "@angular/forms";
import { UpdateProduitComponent } from './composant/update-produit/update-produit.component';
import {HttpClient, HttpClientModule, provideHttpClient, withFetch, withInterceptorsFromDi} from "@angular/common/http";
import { NotfoundComponent } from './notfound/notfound.component';
import { RechercherParCategorieComponent } from './composant/rechercher-par-categorie/rechercher-par-categorie.component';
import { RechercherParNomComponent } from './composant/rechercher-par-nom/rechercher-par-nom.component';
import { RechercherFilterPipe } from './rechercher-filter.pipe';
import { ListCategoiresComponent } from './composant/list-categoires/list-categoires.component';
import { UpdateCategorieComponent } from './composant/update-categorie/update-categorie.component';
import { LoginComponent } from './composant/login/login.component';
import { ForbiddenComponent } from './composant/forbidden/forbidden.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    AddProduitComponent,
    UpdateProduitComponent,
    NotfoundComponent,
    RechercherParCategorieComponent,
    RechercherParNomComponent,
    RechercherFilterPipe,
    ListCategoiresComponent,
    UpdateCategorieComponent,
    LoginComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(
      withInterceptorsFromDi(),
      withFetch()
    ),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
