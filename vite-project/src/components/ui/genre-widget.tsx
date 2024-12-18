import { Genre } from "@/services/genre-services";
import { HStack, Stack, Text } from "@chakra-ui/react"
import { Avatar } from "@/components/ui/avatar"

interface Props{
    genres : Genre[],
    onClick : (genre : Genre) => void;
}

const GenreWidget = ({genres, onClick} : Props) => {
    return (
        <Stack gap="8">
          {genres.map((genre) => (
            <HStack key={genre.name} gap="4" onClick={() => onClick(genre)}>
              <Avatar name={genre.name} size="lg" src={genre.image_background} />
              <Stack gap="0">
                <Text fontWeight="medium">{genre.name}</Text>
              </Stack>
            </HStack>
          ))}
        </Stack>
      )
}

export default GenreWidget;

