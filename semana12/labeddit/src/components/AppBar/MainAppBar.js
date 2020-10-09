import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import {useHistory} from "react-router-dom";

const MainAppBar = () =>{
    const history = useHistory()
    return (
        <AppBar>
            <Toolbar>
                LABEDDIT
            </Toolbar>
        </AppBar>
        
    )
}

export default MainAppBar
