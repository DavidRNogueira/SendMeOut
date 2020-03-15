import React, { FC, useState } from "react";
import { DashboardSideBarDiv, IconDiv, StyledLink, ProfileImg } from "./DashboardSideBarStyles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCogs, faCartPlus, faBell, faTasks } from '@fortawesome/free-solid-svg-icons'
import FamilyPhoto from "../../Images/FamilyPhoto2019copy.jpg"

const DashboardSideBar:FC = ():JSX.Element => {
    
    return (
        <DashboardSideBarDiv>
            <IconDiv>
            </IconDiv>
            <IconDiv>
                <StyledLink to="/dashboard/home">
                    <FontAwesomeIcon icon={faHome}/>
                </StyledLink>
            </IconDiv>
            <IconDiv>
                    <FontAwesomeIcon icon={faBell}/>
            </IconDiv>
            <IconDiv>
                <FontAwesomeIcon icon={faTasks}/>
            </IconDiv>
            <IconDiv>
                <FontAwesomeIcon icon={faCartPlus}/>
            </IconDiv>
            <IconDiv>
                <StyledLink to="/dashboard/settings">
                    <FontAwesomeIcon icon={faCogs}/>
                    </StyledLink>
            </IconDiv>
        </DashboardSideBarDiv>
    )
}

export default DashboardSideBar;