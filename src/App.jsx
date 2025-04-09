// // src/App.jsx
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Login from './components/Login';
// import Home from './components/Home';
// import QuizContainer from './components/QuizContainer';
// import './App.css';

// const App = () => {
//     const [username, setUsername] = useState(null);

//     const handleLogin = (name) => {
//         setUsername(name);
//     };

//     return (
//         <Router>
//             <div className="App">
//                 <Switch>
//                      <Route path="/" exact>
//                         {username ? (
//                             <Home username={username} />
//                         ) : (
//                             <Login onLogin={handleLogin} />
//                         )}
//                     </Route> 
                  

//                      <Route path="/quiz">
//                         {username ? (
//                             <QuizContainer />
//                         ) : (
//                             <Login onLogin={handleLogin} />
//                         )}
//                     </Route> 
                    
//                 </Switch>
//             </div>
//         </Router>
//     );
// };

// export default App;
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import QuizContainer from './components/QuizContainer';
import './App.css';

const App = () => {
    const [username, setUsername] = useState(null);

    useEffect(() => {
        // Load username from localStorage if it exists
        const savedUsername = localStorage.getItem('username');
        if (savedUsername) {
            setUsername(savedUsername);
        }
    }, []);

    const handleLogin = (name) => {
        localStorage.setItem('username', name); // Save login to localStorage
        setUsername(name);
    };

    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact>
                        {username ? (
                            <Home username={username} />
                        ) : (
                            <Login onLogin={handleLogin} />
                        )}
                    </Route>

                    <Route path="/quiz">
                        {username ? (
                            <QuizContainer />
                        ) : (
                            <Login onLogin={handleLogin} />
                        )}
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
