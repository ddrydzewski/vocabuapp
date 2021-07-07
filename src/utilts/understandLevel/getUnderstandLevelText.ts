export const getUnderstandLevelText = (uLevel: string) => {
    switch(uLevel){
        case "1": {
            return "Learning"
        } 
        case "2": {
            return "Familiar"
        }
        case "3": {
            return "Known"
        }
        default : {
            return "Unknown tier"
        }
    }
}
