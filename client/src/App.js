import React from 'react';
import Home from './components/Home';
import { BrowserRouter, Route } from 'react-router-dom';
import Name from './components/FormComponents/name/name'
import FormContextProvider from './context/FormContext';
import Height from './components/FormComponents/height/height.js';
import Age from './components/FormComponents/age/age.js';
import Gender from './components/FormComponents/gender/gender';
import UploadInstructions from './components/FormComponents/UploadInstructions';
import Upload from './components/FormComponents/pictures/pictures';

function App() {
  return (
    <div className = "app">
        <FormContextProvider>
          <BrowserRouter>
              <Route exact path = "/" component = {Home} />
              <Route path = "/name" component = {Name} />
              <Route path = "/gender" component = {Gender} />
              <Route path = "/height" component = {Height} />
              <Route path = "/age" component = {Age} />
              <Route path = "/instructions" component = {UploadInstructions} />
              <Route path = "/upload" component = {Upload} />
          </BrowserRouter>
      </FormContextProvider>
    </div>

  );
}

// document.body.addEventListener('touchmove', function(e){ e.preventDefault(); }, { passive: false });

export default App;
