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

const PlatformDropDown = ({onChange} : Props) =>{
    return (
        <MenuRoot onSelect={(details) => onChange(details.value)}>
          <MenuTrigger asChild>
            <Button variant="outline" size="sm">
              Platform
            </Button>
          </MenuTrigger>
          <MenuContent>
            <MenuItem value="1">
              PC
            </MenuItem>
            <MenuItem value="2">
              PlayStation 
            </MenuItem>
            <MenuItem value="3">
              Xbox 
            </MenuItem>
            <MenuItem value="4">
              iOS 
            </MenuItem>
            <MenuItem value="5">
              Mac 
            </MenuItem>
            <MenuItem value="6">
              Linux 
            </MenuItem>
          </MenuContent>
        </MenuRoot>
      )
}

export default PlatformDropDown;