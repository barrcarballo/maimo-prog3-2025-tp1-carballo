import React from "react";
import RecipeContainer from "@/app/components/RecipeContainer";

const Recipe = async ({params}) => {
    const {id} = await params;

    return(
        <RecipeContainer id = {id}/>
    )
}

export default Recipe