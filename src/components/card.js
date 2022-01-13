import React from "react";


const Card = props => {

    const data = props.data;

    return (
        <div  target="_blank" rel="noopener noreferrer"
           className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-slate-50 hover:bg-slate-900 focus:text-slate-50 focus:bg-slate-900 ">
            <h3 className="text-2xl font-bold">{data.name} &rarr;</h3>
            <p>{data.date}</p>
            <p>{data.end}</p>
            <p>{data.location}</p>
        </div>
    )
        
}


export default Card;