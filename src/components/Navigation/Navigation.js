import {Routes, Route} from 'react-router-dom';
import {Contact} from '../Contact';
import {Home} from '../Home';
import {Projects} from '../Projects';

const Navigation = () => {

    return (
            <Routes>
                <Route exact path='/' element={<Home />}/>
                <Route exact path='/projects' element={<Projects />}/>
                <Route exact path='/contact' element={<Contact />}/>
            </Routes>
    )
}

export default Navigation;

