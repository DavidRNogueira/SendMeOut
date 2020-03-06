import React , { FC } from "react"
import { Logo, NavBarDiv, BottomBorder, NavBarOption, OptionsDiv, SearchBar } from "./NavBarStyles"
import LogoImage from "../../Images/SendMeOutLogo.svg"

const NavBar:FC = ():JSX.Element => {
    return (
        <>
        <NavBarDiv>
            <Logo src={LogoImage} alt="Logo"/>
            <OptionsDiv>
            <NavBarOption to="/">
                Login
            </NavBarOption>
            <NavBarOption to="/create-account">
                Create Account
            </NavBarOption>
            <SearchBar type="text"/>
            </OptionsDiv>
            
        </NavBarDiv>
        <BottomBorder/>
        </>
    )
}

export default NavBar;