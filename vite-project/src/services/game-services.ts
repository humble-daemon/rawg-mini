import ApiClient, {controller} from "./api-client";

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




class GameService{
    
    get(genres?:string){
        if(!genres){
            genres = "";
            for(let i = 0; i < 100; i ++){
                if(i === 99)genres+= i;
                else genres += i + ","
            }
        }

        const request =  ApiClient.get<Games>("/games", {
            params : {
                genres,
            }
        });
        return {request, controller};
    }
}


export default new GameService();