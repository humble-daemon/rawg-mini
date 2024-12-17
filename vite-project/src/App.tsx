import GameWidget from "./components/ui/game-widget"
import { Game, Games } from "./services/game-services"
import { useEffect, useState } from "react"
import ApiClient  from "./services/api-client";

const App = () => {
  const [game, setGame] = useState<Game>();

  useEffect(()=>{

      ApiClient.get<Games>("/games").
      then(res => setGame(res.data.results[2])). 
      catch(err => console.log(err));

      // return () => controller.abort();
  });


  return (
    <>
      <GameWidget game={game}></GameWidget>
    </>
  )
}

export default App;

