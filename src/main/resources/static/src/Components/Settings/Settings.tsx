import React, {FC} from "react"
import { 
    SettingsHeader,
    SettingsMainDiv,
    InputField,
    InputsDiv, 
    InputsColumn, 
    InputLabel, 
    ColumnHeader, 
    UpdateBtn, 
 } from "./SettingsStyles"

const Settings:FC = ():JSX.Element => {
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
                    <InputField type="file"/>
                </InputsColumn>
            </InputsDiv>
           <UpdateBtn>UPDATE</UpdateBtn>
        </SettingsMainDiv>
    )
}

export default Settings;