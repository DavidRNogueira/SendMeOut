import styled from "styled-components"
import { GLOBAL_GREY, GLOBAL_GREEN } from "../../Constants"
import { Link } from "react-router-dom"

export const CreateAccountH1 = styled.h1 `
text-align:center;
font-size:3em;
`
export const HeaderDiv = styled.div `
width:90%;
margin:auto;
`

export const HeaderContent = styled.div `
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
`

export const HeaderHR = styled.hr `
border-color:${GLOBAL_GREY};
margin-bottom:1em;
`

export const FormDiv = styled.div `
display:flex;
flex-direction:row;
margin:auto;
justify-content:space-evenly;
`
export const StyledInput = styled.input `
width:20em;
margin:0.5em 0 0.5em 0;
`

export const StyledLabel = styled.label `
font-weight: bold;
`

export const SectionDiv = styled.div `
display:flex;
flex-direction:column;
align-items:center;
margin:1em;
width:60%;
`

export const SectionHeader = styled.h1 `
text-align:center;
`

export const RegisterBtn = styled.button `
background-color: ${GLOBAL_GREEN};
border:0;
padding: 0.5em 1em 0.5em 1em;
font-size:1.5em;
border-radius:10px;
margin-top:1em;
margin-bottom:1em;
width:15%;
align-self: center;
`
export const BtnDiv = styled.div `
display:flex;
justify-content:center;
flex-direction:column;
padding-bottom:1em;
`

export const GreyDiv = styled.div `
background-color:${GLOBAL_GREY};
width:90%;
margin:auto;
border-radius:10px;
margin-bottom:3em;
padding:1em;
`
export const Required = styled.span `
color:red;
`

export const BackBtn = styled(Link)`
text-align:right;
text-decoration:none;
font-size:2em;
margin-right:2em;

:visited {
    color:${GLOBAL_GREY};
}
`

export const LoginOptionDiv = styled.div `
display:flex;
flex-direction:row;
justify-content:space-evenly;
`
export const LoginOption = styled.strong `

`

export const LoginBtn = styled(Link) `

`

export const ChooseDiv = styled.div `
display:flex;
flex-direction:row;
justify-content:space-evenly;
`

export const LoginHeader = styled.h1 `

`

export const ChooseOptionDiv = styled.div `
display:flex;
flex-direction:row;
margin:auto;
justify-content:space-evenly;
`

export const ChooseOptionBtn = styled.button `
background-color: ${GLOBAL_GREEN};
border:0;
padding: 0.5em 1em 0.5em 1em;
font-size:1.5em;
border-radius:10px;
margin-top:1em;
margin-bottom:1em;
width:15%;
align-self: center;
margin:2em;
`

export const LoginDiv = styled.div `
display:flex;
flex-direction:column;
align-items:center;
`

export const VerticalLine = styled.div `
border-left: 6px solid black;
height: 500px;
`

export const ClickHere = styled.button `
border:0;
background-color:${GLOBAL_GREY};
text-decoration: underline;
color:purple;
font-size:1em;
`