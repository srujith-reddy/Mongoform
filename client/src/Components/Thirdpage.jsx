import React from 'react';
import {useState} from 'react';
import axios from 'axios';
function Third(){

            const [searchname, setSearchname]=useState('');
            const [receieved_after_searching,setReceived_after_searching ]=useState('')


            const handleClick=()=>{
                        axios.get(`http://localhost:5001/api/getEmail/${searchname}`)
                        .then((response)=>{
                            console.log(response);
                            const after_searching=response.data.email;
                            console.log(receieved_after_searching);
                            setReceived_after_searching(after_searching);
                    
                        })
                        .catch((error)=>{
                            console.error('Error fetching email:', error);
                            setReceived_after_searching(''); 
                        })
            }

return(
    <div>
        <input type="text" placeholder="name" value={searchname} onChange={(e)=>setSearchname(e.target.value)} />
        <button type='submit' onClick={handleClick}>Search Name</button>

        <h2>Email: {receieved_after_searching }</h2>

    </div>
)



};


export default function Thirdpage(){
    return (
            <Third/>
    )
};