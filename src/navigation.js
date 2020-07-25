import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';
import PublicationsPage from './pages/publications'
import ShareThoughtsPage from './pages/share-thoughts'

const Navigation = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={PublicationsPage}/>
                <Route path="/share" component={ShareThoughtsPage}/>
            </Switch>
        </BrowserRouter>
    )

}

export default Navigation;