import React from 'react';
import {user} from './data.json';
export default function table (){
    return( 
        <div>
        <h4>Employee List</h4>      
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Email</th>
                    <th>Phone No</th>
                </tr>
            </thead>
            <tbody>
        {user.map((ctx , index) => {
            const { id, name, age, email, phoneNo, gender} = ctx;
            return <tr key={id}>
                        <td >{id}</td>
                        <td >{name}</td>
                        <td >{age}</td>
                        <td >{gender}</td>
                        <td >{email}</td>
                        <td >{phoneNo}</td>
                    </tr>
        })}
        </tbody>
        </table>
        </div>
    );
}