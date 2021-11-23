import './App.css';
import React from 'react';
// import PageChange from './containers/components/pagination';
import SearchBarWithButton from './containers/components/searchBar'
import CitiesContainer from './containers/citiesContainer'



// function clickHandler(){
//     // const searched_text = document.getElementById("header-search").value;

//     // const dispatch = useDispatch();
//     // dispatch(setText("searched_text"));
//     // const searched_text = inputSeacrhText.current.value;
//     console.log("button clicked");
// }
// }

// function backPageHandler(){
//     if (currentPage > 1)
//         setCurrentPage(currentPage - 1);
//     else
//         alert("Current Page is Start Page")
//     console.log("Current page : " + currentPage)
//     }



function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <div>
            <SearchBarWithButton/>
            <br/><br/><br/><br/><br/>
            <CitiesContainer/>
        </div>
    
      </header>
    </div>
  );
}

export default App;
