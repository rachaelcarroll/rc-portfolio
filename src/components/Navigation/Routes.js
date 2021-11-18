import {Switch, Route} from 'react-router-dom';
import {Contact} from '../Contact';
import {Home} from '../Home';
import {Projects} from '../Projects';

export const Routes = () => {

    return (
        // <Router>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/projects' component={Projects}/>
                <Route exact path='/contact' component={Contact}/>
            </Switch>
        // </Router>
    )
}

