/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Components } from './Components';
import { Routes } from 'react-router-dom';

function App() {
    return (
        <React.Suspense fallback={<div className='Process' >Loading...</div>}>
            <Components.Head />
        </React.Suspense>
    );
}

export default App;
