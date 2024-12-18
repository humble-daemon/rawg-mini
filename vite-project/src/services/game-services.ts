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




class GameService {
    get(genres: string, ordering: string, parent_platforms : string) {
      // Don't build an unnecessary genres string; pass undefined if not provided
      const request = ApiClient.get<Games>("/games", {
        params: {
          genres: genres || undefined, // Omit 'genres' from params if undefined
          ordering : ordering || undefined,
          parent_platforms : parent_platforms || undefined,
          page_size : 10,
        },
        signal: controller.signal, // Add the signal to the request here
      });
  
      return { request, controller };
    }

    get_query(query : string){
              // Don't build an unnecessary genres string; pass undefined if not provided
      const request = ApiClient.get<Games>("/games", {
        params: {
          search : query || undefined,
          page_size : 10,
        },
        signal: controller.signal, // Add the signal to the request here
      });
  
      return { request, controller };
    }
  }
  
  export default new GameService();
  