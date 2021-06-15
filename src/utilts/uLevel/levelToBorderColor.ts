import { white } from "precise-ui/dist/es6/colors";
import { uLevelColors } from "../../design/colorStyles/colorStyles";

export const levelToBorderColor = (uLevel: string) => {
    switch(uLevel){
        case "1": {
            return "4px dashed " + uLevelColors.learning;
        } 
        case "2": {
            return "4px dashed " + uLevelColors.familiar;
        }
        case "3": {
            return "4px dashed " + uLevelColors.known;
        }
        default : {
            return "4px solid " + white;
        }
    }
}
