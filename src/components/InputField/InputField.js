import React , { useState }from 'react';
import axios from 'axios';
//import './inputField.css';


function InputField() {
    
    const [info, setInfo] = useState(" ");

    const handleInputChange=(e)=>{
        e.preventDefault()
        console.log(info)
        setInfo("");
       
        axios.post('/api/info/post', info)

        .then(function (response) {
            console.log(response)
        })
        .catch(function (error) {
            console.log(error)
        })
    };
        




    return (
        <form onSubmit={handleInputChange}>
            <label>hey, hi!
            <br/>
            <input type="text"
                   id="input"
                   value={info} 
                   onChange={evt => setInfo(evt.target.value)}                  
                   />
                   </label>
                   
                   <input type="submit" value="Submit"/>
        </form>
    );
 }
 
export default InputField;




