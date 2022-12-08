export interface ApiGare {
    nhits: number,
    parameters: Parameters,
    records: Records[],
}


export interface Parameters{
    dataset: String[],
    rows: number,
    start: number,
    sort: String[],
    facet: String[],
    format: String,
    timezone: String
}

export interface Records{
    datasetid: String,
    recordid: String,
    fields: Fields,
    geometry: Geometry,
    record_timestamp: String
}

export interface Fields{
    fer: number,
    num_mod: number,
    nom_zdl: string,
    navette: number,
    id_ref_lda: number,
    indice_lig: string,
    nom_iv: string,
    val: number,
    tertam: string,
    res_com: string,
    exploitant: string,
    idrefligc: string,
    geo_point_2d: number[],
    idrefliga: string,
    gares_id: number,
    rer: number,
    train: number,
    tramway: number,
    terfer: string,
    ligne: string,
    terrer: string,
    nom_lda: string,
    geo_shape: GeoShape,
    nom: string,
    mode: string,
    metro: number,
    termetro: string,
    nom_long: string,
    tertrain: string,   
    ternavette: string,
    terval: string,
    picto: Picto,
    idf: number,
    id_ref_zdl: number,
    principal: number,
    y: number,
    x: number,
}

export interface GeoShape{
    coordinates: number[],
    type: string,
}

export interface Picto{
    id: string,
    mimetype: string,
    height: number,
    width: number,
    filename: string,
    thumbnail: boolean,
    format: string,
}

export interface Geometry{
    type: string,
    coordinates: number[],
}




