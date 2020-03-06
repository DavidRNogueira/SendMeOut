import React, {FC} from "react"
import { MainHeader, Description } from "./SummaryStyles"

const Summary:FC = ():JSX.Element => {
    return (
        <>
            <MainHeader>Connecting you to the work of the ministry.</MainHeader>
            <Description>
            SendMeOut facilitates the fundraising process for missionaries, 
            and those desiring to be sent to the mission field by providing 
            a platform with effecient tools necessary to do the job. 
            </Description>
        </>
    )
}

export default Summary;