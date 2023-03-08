import { StrictMode, createContext , useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

const Context = createContext({});

interface Settings_Type {
    Api: string,
    ActiveComponent: 0 | 1 | 2 | 3 | 4 | 5,
}


function AppCovers() {
    const [ Settings, SetSettings ] = useState<Settings_Type>({
        Api:"http://localhost:2002",
        ActiveComponent: 0
    })

    return (
        <StrictMode>
            <Context.Provider value={{Settings, SetSettings}}>
                <Router>
                    <App />
                </Router>
            </Context.Provider>
        </StrictMode>
    );
}

// ! Do Not Edit This Line otherwise You Break this App
ReactDOM.createRoot(document.getElementById('UI/UX-Portfolio') as HTMLElement).render(<AppCovers />);

export default Context;