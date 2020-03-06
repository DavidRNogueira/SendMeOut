import React, { FC } from "react"
import NavBar from "../../Components/NavBar/NavBar";
import Summary from "../../Components/Summary/Summary";
import Trending from "../../Components/Trending/Trending";
import Footer from "../../Components/Footer/Footer";

const Home:FC = ():JSX.Element => {
    return(
        <>
        <NavBar/>
        <Summary/>
        <Trending/>
        <Footer/>
        </>
    )
}

export default Home;