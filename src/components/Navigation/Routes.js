import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Contact} from '../Contact'
import {NavBar} from './NavBar'
import {Home} from '../Home'
import {DownloadResume} from '../DownloadResume'
import {ProjectPage} from '../ProjectPage'

export const Routes = () => {

    return (
        <Router>
            {/* <NavBar/> */}
            <section className="App">
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/contact' component={Contact}/>
                <Route exact path='/projects' component={ProjectPage}/>
                <Route exact path='/download-resume' component={DownloadResume}/>
            </Switch>
            </section>
        </Router>
    )
}

