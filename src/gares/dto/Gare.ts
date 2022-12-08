export interface Gare {
    
    nom: string;
    gares_id: number;

    nom_lda: string;

    mode: string;

    ligne: string;
    indice_ligne: string;

    geo_point_2d: number[];

    fer: number;
    train: number;
    rer: number;
    metro: number;
    tramway: number;
    navette: number;
    vale: number;

    favoris: boolean;
}