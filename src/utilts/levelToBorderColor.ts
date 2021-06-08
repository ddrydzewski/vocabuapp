import { white } from "precise-ui/dist/es6/colors";
import { uLevelColors } from "../design/colorStyles/colorStyles";

export const levelToBorderColor = (uLevel: string) => {
    switch(uLevel){
        case "1": {
            return "5px solid " + uLevelColors.learning;
        } 
        case "2": {
            return "5px solid " + uLevelColors.familiar;
        }
        case "3": {
            return "5px solid " + uLevelColors.known;
        }
        default : {
            return "5px solid " + white;
        }
    }
}
