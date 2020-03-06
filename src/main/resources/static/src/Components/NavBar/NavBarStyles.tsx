import styled from "styled-components"
import { Link } from "react-router-dom"
import { GLOBAL_GREY } from "../../Constants"

export const Logo = styled.img `
`
export const NavBarDiv = styled.div `
display:flex;
justify-content:space-between;
width:90%;
margin:auto;
`
export const BottomBorder = styled.hr `
border-color:${GLOBAL_GREY};
margin:0 auto 0 auto;
width:90%;
`
export const OptionsDiv = styled.div `
display:flex;
justify-content:space-evenly;
align-items:center;
`

export const NavBarOption = styled(Link) `
    text-decoration:none;
    margin:1em;
    font-size:2em;

    &:visited{
        color:grey;
    }
`
export const SearchBar = styled.input `

`