import React, { useState } from 'react';
import Navigation from './Components/Navigation/Navigation';
import News from './Components/News/News'
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import Alert from './Components/Alert';



const App = () => {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0);
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const handleDarkMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode enabled", "success");
      document.title = 'NewsHunt | Dark Mode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success");
      document.title = 'NewsHunt | Light Mode';
    }
  }

  return (
    <div>
      <Router>
        <Navigation mode={mode} handleDarkMode={handleDarkMode}/>
        <Alert alert={alert} />
        <LoadingBar
          color='#f11946'
          height={4}
          progress={progress}
        />
        <Switch>
          <Route exact path="/"><News apiKey={apiKey} mode={mode} showAlert={showAlert} setProgress={setProgress} key="general" pageSize={pageSize} country="in" category='general' /></Route>
          <Route exact path="/business"><News apiKey={apiKey} mode={mode} showAlert={showAlert} setProgress={setProgress} key="business" pageSize={pageSize} country="in" category='business' /></Route>
          <Route exact path="/entertainment"><News apiKey={apiKey} mode={mode} showAlert={showAlert} setProgress={setProgress} key="entertainment" pageSize={pageSize} country="in" category='entertainment' /></Route>
          <Route exact path="/health"><News apiKey={apiKey} mode={mode} showAlert={showAlert} setProgress={setProgress} key="health" pageSize={pageSize} country="in" category='health' /></Route>
          <Route exact path="/science"><News apiKey={apiKey} mode={mode} showAlert={showAlert} setProgress={setProgress} key="science" pageSize={pageSize} country="in" category='science' /></Route>
          <Route exact path="/sports"><News apiKey={apiKey} mode={mode} showAlert={showAlert} setProgress={setProgress} key="sports" pageSize={pageSize} country="in" category='sports' /></Route>
          <Route exact path="/technology"><News apiKey={apiKey} mode={mode} showAlert={showAlert} setProgress={setProgress} key="technology" pageSize={pageSize} country="in" category='technology' /></Route>
        </Switch>
      </Router>
    </div>
  )
}
export default App