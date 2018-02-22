import React from "react";
import { render } from "react-dom";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import tachyons from 'tachyons';


render(
  <div>
  <SearchBox/>
    <CardList robots={robots} />
  </div>
  , document.getElementById("root"));



registerServiceWorker();
