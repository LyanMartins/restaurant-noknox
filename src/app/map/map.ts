export interface IGeometry{
    type: string;
    coordinates:number[];
}

export interface iGeoJson{
    type: string;
    geometry: IGeometry;
    properties?: any;
    $key?: string;
}

export class GeoJson implements iGeoJson {

    type: 'Feature';
    geometry: IGeometry;

    constructor(coordinates,public properties? ){
        this.geometry = {
            type:'Pointer',
            coordinates: coordinates
        }
    }

}

export class FeatureCollection {
    
    type:'FeatureCollection'

    constructor(public features: Array<GeoJson>){

    }
}