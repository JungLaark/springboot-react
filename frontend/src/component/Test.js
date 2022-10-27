import React, {useEffect, useState} from 'react';


const Test = () => {
    const [message, setMessage] = useState([]);

    useEffect(()=>{
        fetch("/test")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setMessage(data);
            })
    })

    return (
        <div>
            {
                message.map((text, index) => 
                    <li key={`${index}`}>{text}</li>
                )
            
            }
        </div>
    );
};

export default Test;