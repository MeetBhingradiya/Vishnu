/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Components } from './Components';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Routes>
            <Route path='/*' element={
                <React.Suspense fallback={<div className='Process' >Loading...</div>}>
                    <Components.Head />
                    <Components.Home />
                    {/* <Components.About />
                    <Components.Skill /> */}
                </React.Suspense>
            } />
        </Routes>
    );
}

export default App;
