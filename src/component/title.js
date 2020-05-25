import React from 'react';


const Title = (props)=>{
    console.log(props);
    return(
        <div className="cartRow">
            <div className="title">{props.name}</div>
            <div className="price">{props.title}</div>
        </div>
    )
}

export default Title;