import { Injectable } from '@nestjs/common';
import {HttpService} from '@nestjs/axios';
import { tap, map } from 'rxjs';

import { SimpleGare } from './dto/SimpleGare';
import { ApiGare } from './dto/ApiGare';
import { Gare } from './dto/Gare';
import { GareDto } from './dto/Gare.dto';

@Injectable()
export class GaresService {

  private c: number = 0;
  private storedGares: Gare[] = [];
  private storedSimpleGares: SimpleGare[] = [];
  constructor (private httpService: HttpService) {}

  async onModuleInit() {
    await this.loadGaresFromApi();
    
  }

  private async loadGaresFromApi(): Promise<void> {
    this.httpService
      .get<ApiGare>('https://data.opendatasoft.com/api/records/1.0/search/?dataset=gares-et-stations-du-reseau-ferre-dile-de-france-par-ligne%40hauts-de-seine&q=&rows=1000&sort=-fer')
      .pipe(
        map((elem) => elem.data),
        tap((elem) => {
          elem.records.forEach(element => {
            this.c+=1
            if (this.c%5 == 0)
            {
              //Rempli le tableau de gares simplifiees
              this.storedSimpleGares.push({
                nom: element.fields.nom,
                mode: element.fields.mode,
                gares_id: element.fields.gares_id,
                favoris: false,
                geo_point_2d: element.fields.geo_point_2d,
              });
              
              //Rempli le tableau de gares completes
              return this.storedGares.push({
                nom: element.fields.nom,
                gares_id: element.fields.gares_id,
                nom_lda: element.fields.nom_lda,
                mode: element.fields.mode,
                ligne: element.fields.ligne,
                indice_ligne: element.fields.indice_lig,
                geo_point_2d: element.fields.geo_point_2d,
                fer: element.fields.fer,
                train: element.fields.train,
                rer: element.fields.rer,
                metro: element.fields.metro,
                tramway: element.fields.tramway,
                navette: element.fields.navette,
                vale: element.fields.val,
                favoris: false,
              });
            }
          });  
        }),
      )
      .subscribe();
  }

    

  //Renvoie la liste des gares simplifiees
  findAll(): SimpleGare[] {
    return this.storedSimpleGares;
  }

  //Renvoie la gare dont l'id est passé en parametre, en version complete
  findOne(id: number): Gare {
    if (this.storedGares.find(gare => gare.gares_id === id) != undefined){
      return this.storedGares.find(gare => gare.gares_id === id);
    }
    else{
      console.log("Gare non trouvée");
      return null;
    }
  }

  update(id: number): Gare {
    if (this.storedGares.find(gare => gare.gares_id === id) != undefined){
      this.storedGares.find(gare => gare.gares_id === id).favoris = !this.storedGares.find(gare => gare.gares_id === id).favoris;
      this.storedSimpleGares.find(gare => gare.gares_id === id).favoris = !this.storedSimpleGares.find(gare => gare.gares_id === id).favoris;
    return this.storedGares.find(gare => gare.gares_id === id);
    }
    else{
      console.log("Gare non trouvée");
    }
    return null;
  }

  searchByAuthorAndTitle(term: string): Gare[] {
    const escapedTerm = term.toLowerCase().trim();

    return this.storedGares.filter((gare) => {
      return (
        gare.nom_lda.toLowerCase().includes(escapedTerm) ||
        gare.nom.toLowerCase().includes(escapedTerm)
      );
    });
  }
}
