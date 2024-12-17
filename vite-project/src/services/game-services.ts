export interface PlatForm{
    id : number,
    name : string 
}

export interface ParentPlatform{
    platform : PlatForm
}
export interface Rating{
    id : number,
    title : string,
    count : number 
}
export interface Game{
    id : number,
    name : string,
    background_image : string,
    parent_platforms : ParentPlatform[],
    ratings : Rating[],
    metacritic : number 
}

export interface Games{
    results : Game[];
}

