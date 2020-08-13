import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import PageHome from './pages/PageHome';
import PageGallery from './pages/PageGallery';
import PageVideos from './pages/PageVideos';
import PageForms from './pages/PageForms';
import FormAccordion from './pages/FormAccordion';
import FormDropdown from './pages/FormDropdown';
import FormSearch from './pages/FormSearch';

const App = () => {
    return (
        <div className='ui container'>
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path='/' exact component={PageHome} />
                    <Route path='/gallery' component={PageGallery} />
                    <Route path='/videos' component={PageVideos} />
                    <Route path='/forms' component={PageForms} />
                    <Route path='/forms-accordion' component={FormAccordion} />
                    <Route path='/forms-dropdown' component={FormDropdown} />
                    <Route path='/forms-search' component={FormSearch} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;