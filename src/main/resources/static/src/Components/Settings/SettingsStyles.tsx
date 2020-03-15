import styled from "styled-components";
import { GLOBAL_GREEN} from "../../Constants";
import ReactCrop from "react-image-crop"

export const SettingsMainDiv = styled.div `
display:flex;
flex-direction:column;
width:96vw;
`

export const SettingsHeader = styled.h1 `
font-size:3em;
justify-self:center;
margin:1em;
align-self:center;
`

export const InputsDiv = styled.div `
display:flex;
flex-direction:row;
justify-content:space-evenly;
`
export const InputsColumn = styled.div `
display:flex;
flex-direction:column;
margin:1em;
justify-content:space-between;
`
export const ColumnHeader = styled.h1 `
font-size:1.5em;
text-align:center;
`

export const InputLabel = styled.label `

`

export const InputField = styled.input `
width:20em;
height: 2em;
border:0;
border-bottom: 1px solid black;
margin-bottom:0.5em;
`

export const UpdateBtn = styled.button `
width:10%;
font-size:1.5em;
border-radius:10px;
background-color:${GLOBAL_GREEN};
align-self:center;
margin-top:2em;
`

export const ProfileImg = styled(ReactCrop) `
maxWidth:100%;
`