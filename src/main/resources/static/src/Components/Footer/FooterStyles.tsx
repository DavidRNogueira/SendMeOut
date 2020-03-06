import styled from "styled-components"
import { GLOBAL_GREY } from "../../Constants"
import { Link } from "react-router-dom"

export const FooterMainDiv = styled.div `
background-color:${GLOBAL_GREY};
display:flex;
flex-direction:row;
position:absolute;
bottom:0px;
width:100%;
`
export const SectionDiv = styled.div `
display:flex;
flex-direction:column;
margin: 1em 2em 1em 2em;
`
export const SectionHeader = styled.h3 `
margin:0.25em;
`
export const SectionOption = styled(Link) `
text-decoration:none;

:visited{
    color:black;
}
`