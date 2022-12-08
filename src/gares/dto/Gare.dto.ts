import {IsNotEmpty, IsString, IsNumber, IsBoolean } from 'class-validator';

export class GareDto {
    @IsNotEmpty()
    @IsString()
    readonly nom: string;

    @IsNotEmpty()
    @IsNumber()
    readonly gares_id: number;

    @IsNotEmpty()
    @IsString()
    readonly nom_lda: string;

    @IsNotEmpty()
    @IsString()
    readonly mode: string;

    @IsNotEmpty()
    @IsString()
    readonly ligne: string;

    @IsNotEmpty()
    @IsString()
    readonly indice_ligne: string;

    @IsNotEmpty()
    readonly geo_point_2d: number[];

    @IsNotEmpty()
    @IsNumber()
    readonly fer: number;

    @IsNotEmpty()
    @IsNumber()
    readonly train: number;

    @IsNotEmpty()
    @IsNumber()
    readonly rer: number;

    @IsNotEmpty()
    @IsNumber()
    readonly metro: number;

    @IsNotEmpty()
    @IsNumber()
    readonly tramway: number;

    @IsNotEmpty()
    @IsNumber()
    readonly navette: number;

    @IsNotEmpty()
    @IsNumber()
    readonly vale: number;

    @IsNotEmpty()
    @IsBoolean()
    readonly favoris: boolean;

    constructor (nom : string, gares_id : number, nom_lda : string, mode : string, ligne : string, indice_ligne : string, geo_point_2d : number[], fer : number, train : number, rer : number, metro : number, tramway : number, navette : number, vale : number, favoris : boolean) {
        this.nom = nom;
        this.gares_id = gares_id;
        this.nom_lda = nom_lda;
        this.mode = mode;
        this.ligne = ligne;
        this.indice_ligne = indice_ligne;
        this.geo_point_2d = geo_point_2d;
        this.fer = fer;
        this.train = train;
        this.rer = rer;
        this.metro = metro;
        this.tramway = tramway;
        this.navette = navette;
        this.vale = vale;
        this.favoris = favoris;

    }
}   