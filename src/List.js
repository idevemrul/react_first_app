import React from "react";
import './index.css';
import Todo from './data_source/todo.json';
import { v4 as uuidv4 } from 'uuid';



console.log(uuidv4());
const List = () => {
    return (
        <div className="masterDiv">
            {
                Todo.map((todo, index) => {
                    const { title, desc } = todo;
                    return (
                        <div className="card2" key={uuidv4()} id={uuidv4()}>
                            <h3 className="cardTitle">{title}</h3>
                            <p className="cardDescription">{desc}</p>
                            <p style={{fontSize:24,color:'purple',textAlign:'center'}}>UUID: { uuidv4()} <span style={{color:'red'}}> | </span> MapIndex: { index}</p>
                        </div>
                    );
                })
            }
        </div>
    )
}

// ======data extract from json file by array.map(()=>) method=========
// items = Data.map((item, index) => <Card key = { index } cardTitle={item.title} cardDescription={item.desc} />); 

// function List() {
//   return <div className="masterDiv">
//             <h1 className="headerStyle">This is first react app.</h1>
//             {items}
//           </div>
// }

export default List;
