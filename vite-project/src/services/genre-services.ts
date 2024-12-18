import ApiClient, {controller} from "./api-client";

export interface Genre{
    id : number,
    name : string,
    image_background : string,
}

export interface Genres{
    results : Genre[];
}



class GenreService{
    
    get(){
        const request =  ApiClient.get<Genres>("/genres");
        return {request, controller};
    }
}


export default new GenreService();