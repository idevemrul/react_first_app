import React from "react";
import Card from './component/Card.js';
import './index.css';
import Data from './data_source/data.json';


let items = [];
console.log(Data);

// ------data extract by for loop-------
// for (let i = 0; i < Data.length; i++){
//   items.push(<Card cardTitle={Data[i].title} cardDescription={Data[i].desc} />) 
// }

// ======data extract from json file by array.map(()=>) method=========
items = Data.map((item, index) => <Card key={index} cardTitle={item.title} cardDescription={item.desc} />); 

function App() {
  return <div className="masterDiv">
            <h1 className="headerStyle">This is first react app.</h1>
            {items}
          </div>
}

export default App;
