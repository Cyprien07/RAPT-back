import { IsNotEmpty, IsString, IsNumber, IsBoolean } from "class-validator";

export class SimpleGareDto {
    @IsNotEmpty()
    @IsString()
    readonly nom: string;

    @IsNotEmpty()
    @IsString()
    readonly mode: string;

    @IsNotEmpty()
    @IsNumber()
    readonly gares_id: number;

    @IsNotEmpty()
    @IsBoolean()
    readonly favoris: boolean;

    @IsNotEmpty()
    readonly geo_point_2d: number[];

    constructor(nom: string, mode: string, gares_id: number, favoris: boolean, geo_point_2d: number[]) {
        this.nom = nom;
        this.mode = mode;
        this.gares_id = gares_id;
        this.favoris = favoris;
        this.geo_point_2d = geo_point_2d;
    }
}