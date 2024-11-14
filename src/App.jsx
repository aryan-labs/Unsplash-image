import React from 'react' 
import './index.css'
import Nav from './nav';
import SearchForm from './SearchForm';
import Gallery from './Gallery';


const App = () => {
  return (
    <div className='app'>
<Nav></Nav>
<SearchForm></SearchForm>
<Gallery></Gallery>
      
    </div>
  )
}

export default App;
