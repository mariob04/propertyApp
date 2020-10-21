import React from 'react';
import './App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import SearchPage from './SearchPage';
import SearchUnique from './SearchUnique';
import SearchRooms from './SearchRooms';
import SearchHomes from './SearchHomes';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="app">
		<Router>
			<Header />

			<Switch>
				<Route path="/search">
					<SearchPage />
				</Route>
				<Route path="/searchUnique">
					<SearchUnique />
				</Route>
				<Route path="/searchRooms">
					<SearchRooms />
				</Route>
				<Route path="/searchHomes">
					<SearchHomes />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
			<Footer />
		</Router>
    </div>
  );
}

export default App;
