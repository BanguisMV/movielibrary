import React,{Suspense} from 'react';
import { BrowserRouter as Router,} from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import './loaders.css';
// import App from './App';
import { PageProvider } from './Context/PaginationContext';
import { MovieProvider } from './Context/MovieContext';
import { GenreProvider } from './Context/GenreContext';
import AnotherLoader from './Components/UI/AnotherLoader';
import * as serviceWorker from './serviceWorker';
const App = React.lazy(() => import('./App'));

ReactDOM.render(
  <React.StrictMode>
    <Router>  
      <PageProvider > 
         <MovieProvider>
          <GenreProvider>
            <Suspense fallback={<div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh', width:'100vw'}}> <AnotherLoader />  </div> }>
              <App />   
             </Suspense>
           </GenreProvider>
         </MovieProvider>
      </PageProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
