import styled from "styled-components";
import { GLOBAL_GREY} from "../../Constants";
import { Link } from "react-router-dom";
import ReactCrop from "react-image-crop"

export const DashboardSideBarDiv = styled.div `
display:flex;
flex-direction:column;
background-color:grey;
width:6%;
height:100vh;
align-items:center;
justify-content:center;
`

export const IconDiv = styled.div `
display:flex;
background-color:${GLOBAL_GREY};
font-size:2em;
padding:0.25em;
margin:0.5em;
border-radius:10px;
`
export const StyledLink = styled(Link) `
:visited{
    color:black;
}
`
export const ProfileImg = styled(ReactCrop) `
`