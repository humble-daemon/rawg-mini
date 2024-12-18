import GameWidget from "./components/ui/game-widget"
import GenreWidget from "./components/ui/genre-widget"
import { useEffect, useState } from "react"
import gameServices, {Game} from "./services/game-services"
import genreServies, {Genre} from "./services/genre-services"
import OrderingDropDown from "./components/ui/ordering-dropdown"
import PlatformDropDown from "./components/ui/platform-dropdown";
import SearchBar from "./components/ui/search_bar"

const App = () => {
  const [games, setGames] = useState<Game[]>();
  const [genres, setGenres] = useState<Genre[]>();
  const [sortGenre, setSortGenre] = useState("");
  const [sortOrdering, setSortOrdering] = useState("");
  const [parentPlatform, setParentPlatform] = useState("");



  useEffect(()=>{
      const{request} = gameServices.get(sortGenre, sortOrdering, parentPlatform);
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
    setSortGenre(genre.id + "");
    const{request} = gameServices.get(genre.id + "", sortOrdering, parentPlatform);
    request.
    then(res => setGames(res.data.results)). 
    catch(err => {
      if (err.name !== "CanceledError") 
        console.error("Error fetching games:", err);
    });
  }


  const handleOrdering = (option : string) =>{
    setSortOrdering(option);
    const{request} = gameServices.get(sortGenre, option, parentPlatform);
    request.
    then(res => setGames(res.data.results)). 
    catch(err => {
      if (err.name !== "CanceledError") 
        console.error("Error fetching games:", err);
    });
  }

  const handlePlatform= (platform : string) =>{
    setParentPlatform(platform);
    const{request} = gameServices.get(sortGenre, sortOrdering, platform);
    request.
    then(res => setGames(res.data.results)). 
    catch(err => {
      if (err.name !== "CanceledError") 
        console.error("Error fetching games:", err);
    });
  }

  const handleSearch= (query : string) =>{
    
    const{request} = gameServices.get_query(query);
    request.
    then(res => setGames(res.data.results)). 
    catch(err => {
      if (err.name !== "CanceledError") 
        console.error("Error fetching games:", err);
    });
  }

  return (
    <> 
    <SearchBar search={handleSearch}></SearchBar>
      <PlatformDropDown onChange={handlePlatform}></PlatformDropDown>
      <OrderingDropDown onChange={handleOrdering}></OrderingDropDown>
      {games?games.map(game => <GameWidget game={game} key={game.id}></GameWidget>):null}
      {genres?<GenreWidget genres={genres} onClick={handleGenreClick}></GenreWidget>:null}
    </>
  )
}

export default App;

