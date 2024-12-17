import {Game, Rating, ParentPlatform} from "@/services/game-services"
import {  Card, Image} from "@chakra-ui/react"
import { HStack, Stack } from "@chakra-ui/react"
import {
  Skeleton,
  SkeletonText} from "./skeleton";

interface Props{
    game?: Game
}


const getRating = (ratings : Rating[]) => {
    return ratings.reduce((acc, rating)=>{return rating.count > acc.count?rating:acc}, ratings[0]).title;
}

const getPlatforms = (platforms : ParentPlatform[]) =>{
    return platforms.reduce((acc, platform) =>{return acc + " " + platform.platform.name}, "");
}

const GameWidget = ({game} : Props) => {
    if(!game)
        return (
            <Stack gap="6" maxW="xs">
              <Skeleton height="200px" />
              <HStack width="full">
                <SkeletonText noOfLines={2} />
              </HStack>
            </Stack>
          )
    return (
        <Card.Root maxW="sm" overflow="hidden">
          <Image
            src={game.background_image}
          />
          <Card.Body gap="2">
            <Card.Description>
              {getPlatforms(game.parent_platforms)}{" | "}{game.metacritic}
            </Card.Description>
            <Card.Title>{game.name}{" | "}{getRating(game.ratings)}</Card.Title>


          </Card.Body>
        </Card.Root>
      )
}

export default GameWidget;