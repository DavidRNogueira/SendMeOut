import React, {FC} from "react"
import { FooterMainDiv, SectionDiv, SectionHeader, SectionOption } from "./FooterStyles";

const Footer:FC = ():JSX.Element => {
    return(
        <FooterMainDiv>
            <SectionDiv>
                <SectionHeader>Section</SectionHeader>
                <SectionOption to="/">
                    Option
                </SectionOption>
                <SectionOption to="/">
                    Option
                </SectionOption>
                <SectionOption to="/">
                    Option
                </SectionOption>
            </SectionDiv>
            <SectionDiv>
                <SectionHeader>Section</SectionHeader>
                <SectionOption to="/">
                    Option
                </SectionOption>
                <SectionOption to="/">
                    Option
                </SectionOption>
                <SectionOption to="/">
                    Option
                </SectionOption>
            </SectionDiv>
            <SectionDiv>
                <SectionHeader>Section</SectionHeader>
                <SectionOption to="/">
                    Option
                </SectionOption>
                <SectionOption to="/">
                    Option
                </SectionOption>
                <SectionOption to="/">
                    Option
                </SectionOption>
            </SectionDiv>
             <SectionDiv>
                <SectionHeader>Section</SectionHeader>
                <SectionOption to="/">
                    Option
                </SectionOption>
                <SectionOption to="/">
                    Option
                </SectionOption>
                <SectionOption to="/">
                    Option
                </SectionOption>
            </SectionDiv>
        </FooterMainDiv>
    )
}

export default Footer;