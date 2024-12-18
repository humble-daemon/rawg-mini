import GameWidget from "./components/ui/game-widget"
import GenreWidget from "./components/ui/genre-widget"
import { useEffect, useState } from "react"
import gameServices, {Game} from "./services/game-services"
import genreServies, {Genre} from "./services/genre-services"


const App = () => {
  const [games, setGames] = useState<Game[]>();
  const [genres, setGenres] = useState<Genre[]>();

  useEffect(()=>{
      const{request} = gameServices.get();
      request.
      then(res => setGames(res.data.results)). 
      catch(err => {
        if (err.name !== "CanceledError") 
          console.error("Error fetching games:", err);
      });

      const{request : request2} = genreServies.get();
      request2.
      then(res => {
        
        setGenres(res.data.results);
      
      }). 
      catch(err => {
        if (err.name !== "CanceledError") 
          console.error("Error fetching games:", err);
      });

      // return () => controller.abort();
  }, []);

  // event handlers
  const handleGenreClick = (genre : Genre) =>{
    const{request} = gameServices.get(genre.id + "");
    request.
    then(res => setGames(res.data.results)). 
    catch(err => {
      if (err.name !== "CanceledError") 
        console.error("Error fetching games:", err);
    });
  }

  return (
    <> 
      {genres?<GenreWidget genres={genres} onClick={handleGenreClick}></GenreWidget>:null}
      {games?games.map(game => <GameWidget game={game} key={game.id}></GameWidget>):null}
    </>
  )
}

export default App;

