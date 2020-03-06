import React, {FC} from "react"
import { TrendingHeader, GreyLine, TrendingMainDiv, MissionaryDiv } from "./TrendingStyles"

const Trending:FC = (): JSX.Element => {
    return (
        <TrendingMainDiv>
            <TrendingHeader>
                Trending
            </TrendingHeader>
            <GreyLine/>
            <MissionaryDiv/>
        </TrendingMainDiv>
    )
}

export default Trending;