import React, {FC} from "react"
import DashboardSideBar from "../../Components/DashboardSideBar/DashboardSideBar"
import { Router, Route } from "react-router-dom"
import { history } from "../../App"
import HomeDashboard from "../../Components/HomeDashboard/HomeDashboard"
import { DashboardMainDiv } from "./DashboardStyles"
import Settings from "../../Components/Settings/Settings"

const Dashboard:FC = ():JSX.Element => {
    return(
        <DashboardMainDiv>
            <DashboardSideBar/>
            <Router history={history}>
                <Route path="/dashboard/home" component={HomeDashboard}/>
                <Route path="/dashboard/settings" component={Settings}/>
            </Router>
        </DashboardMainDiv>
    )
}
export default Dashboard;