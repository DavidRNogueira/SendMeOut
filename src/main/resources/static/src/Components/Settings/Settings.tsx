import React, {FC, useState} from "react"
import { 
    SettingsHeader,
    SettingsMainDiv,
    InputField,
    InputsDiv, 
    InputsColumn, 
    InputLabel, 
    ColumnHeader, 
    UpdateBtn, 
    ProfileImg
 } from "./SettingsStyles"
 import Img from "../../Images/FamilyPhoto2019copy.jpg"

const Settings:FC = ():JSX.Element => {
    const [ src, setSrc ] = useState<any>(Img)
    const [ crop, setCrop ] = useState<any>({
        unit: '%',
        width: 30,
        aspect: 16 / 9,
      })

    const onSelectFile = (e:any) => {
        if (e.target.files && e.target.files.length > 0) {
          const reader = new FileReader();
          reader.addEventListener('load', () =>
            setSrc(reader.result)
          );
          reader.readAsDataURL(e.target.files[0]);
        }
      };

    return (
        <SettingsMainDiv>
            <SettingsHeader>Settings</SettingsHeader>
            <InputsDiv>
                <InputsColumn>
                    <ColumnHeader>Profile</ColumnHeader>
                    <InputLabel>First Name</InputLabel>
                    <InputField type="text"/>
                    <InputLabel>Last Name</InputLabel>
                    <InputField type="text"/>
                    <InputLabel>Title</InputLabel>
                    <InputField type="text"/>
                    <InputLabel>Organization</InputLabel>
                    <InputField type="text"/>
                    <InputLabel>Phone Number</InputLabel>
                    <InputField type="text"/>
                </InputsColumn>
                <InputsColumn>
                    <ColumnHeader>Address</ColumnHeader> 
                    <InputLabel>Street Address 1</InputLabel>
                    <InputField type="text"/>
                    <InputLabel>Street Address 2</InputLabel>
                    <InputField type="text"/>
                    <InputLabel>City</InputLabel>
                    <InputField type="text"/>
                    <InputLabel>State</InputLabel>
                    <InputField type="text"/>
                    <InputLabel>Zip Code</InputLabel>
                    <InputField type="text"/>
                    <InputLabel>Country</InputLabel>
                    <InputField type="text"/>
                </InputsColumn>
                <InputsColumn>
                    <ColumnHeader>Profile Image</ColumnHeader> 
                    <InputField type="file" onChange={(e:any) => {onSelectFile(e)}}/>
                </InputsColumn>
            </InputsDiv>
           <UpdateBtn>UPDATE</UpdateBtn>
        </SettingsMainDiv>
    )
}

export default Settings;