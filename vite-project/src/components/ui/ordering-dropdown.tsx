import { Button } from "@/components/ui/button"
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "./menu"

interface Props{
    onChange : (value : string) => void;
}

const OrderingDropDown = ({onChange} : Props) =>{
    return (
        <MenuRoot onSelect={(details) => onChange(details.value)}>
          <MenuTrigger asChild>
            <Button variant="outline" size="sm">
              Ordering
            </Button>
          </MenuTrigger>
          <MenuContent>
            <MenuItem value="name">
              name
            </MenuItem>
            <MenuItem value="released">
              released
            </MenuItem>
            <MenuItem value="added">
              added
            </MenuItem>
            <MenuItem value="created">
              created
            </MenuItem>
            <MenuItem value="updated">
              updated
            </MenuItem>
            <MenuItem value="rating">
              rating
            </MenuItem>
            <MenuItem value="metacritic">
              metacritic
            </MenuItem>
          </MenuContent>
        </MenuRoot>
      )
}

export default OrderingDropDown;