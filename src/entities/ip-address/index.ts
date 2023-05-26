export type ListIpAddressProps = {
    ip: string,
    isp:string,
    location:{
        country:string,
        region:string,
        timezone:string
    },
    as:{
        asn:number,
        name:string,
        route:string,
        domain:string,
        type:string
    }
}

export type ListGeoCodeProps = [
    {
        place_id:number,
        licence:string,
        powered_by:string,
        osm_type:string,
        osm_id:number,
        boundingbox:[],
        lat:string,
        lon:string,
        display_name:string,
        class:string,
        type:string,
        importance:number
    }
]