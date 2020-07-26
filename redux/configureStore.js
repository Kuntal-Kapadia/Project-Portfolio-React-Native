import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { campsites } from './campsites';
import { comments } from './comments';
import { promotions } from './promotions';
import { partners } from './partners';
import { favorites } from './favorites';
import { Homepagecards } from './homepagecards';
import { Homepagecarousel } from './homepagecarousel';
import { whyidpage } from './whyidpage';
import { Onlinepage } from './onlinepage';
import { Onlinepagecards } from './onlinepagecards';
import { Learningpage } from './learningpage';
import { Virtualpage } from './virtualpage';
import { Registerpage } from './registerpage';
import { Coursespage } from './coursespage';
import { Coursespagesidebar } from './coursespagesidebar';
import { Coursespagesearchresults } from './coursespagesearchresults'

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            campsites,
            comments,
            partners,
            promotions, 
            favorites,
            whyidpage,
            homepagecards: Homepagecards,
            homepagecarousel : Homepagecarousel,
            onlinepage: Onlinepage,
            onlinepagecards: Onlinepagecards,
            learningpage: Learningpage,
            virtualpage: Virtualpage,
            coursespage: Coursespage,
            coursespagesidebar:Coursespagesidebar, 
            coursespagesearchresults:Coursespagesearchresults,
            registerpage: Registerpage
            
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}