import React from "react";
import './index.css';
import Users from './data_source/nestedUser.json';
import { v4 as uuidv4 } from 'uuid';


export default function User() {
    return (
        <div>
            <h1>This is nested user by mapping</h1>
            {
                Users.map((user, index) => {
                    return (
                         <article key={index} id={index}> 
                            <h3>{user.name}</h3>
                            <h6>{user.passion}</h6>
                            {
                                user.phones.map((phone,index) => {
                                    return (
                                        <div key={index} id={uuidv4()}>
                                            <p>{ phone.home}</p>
                                            <p>{ phone.office}</p>
                                        </div>
                                    )
                                }
                                        
                                )
                            }
                        </article>
                    )
                })
            }
            </div>

    )
};
