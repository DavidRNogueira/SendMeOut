import React, {FC} from "react"
import { HomeDashboardMainDiv, WelcomeHeader } from "./HomeDashboardStyles";

const HomeDashboard:FC = ():JSX.Element => {
    return (
        <HomeDashboardMainDiv>
            <WelcomeHeader>Welcome, User!</WelcomeHeader>
        </HomeDashboardMainDiv>
    )
}

export default HomeDashboard;