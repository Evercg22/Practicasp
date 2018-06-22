//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NRoutingModule } from './app.routes';


//Rutas


//Servicios



//Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NabvarComponent } from './components/share/nabvar/nabvar.component';
import { TarjetasComponent } from './components/share/tarjetas/tarjetas.component';
import { LoadComponent } from './components/share/load/load.component';


//Pipes
import { NoImagePipe } from './pipes/no-image.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NabvarComponent,
    NoImagePipe,
    TarjetasComponent,
    LoadComponent,
    DomseguroPipe
    
  ],
  imports: [
    BrowserModule,
    NRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
