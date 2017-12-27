import React from 'react';
import classes from './Person.scss';
// import Radium from 'radium';
const person = (props) => {
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // };
    return(
        <div className={classes.Person}>
        {/* <div className="Person" style={style}> */}
            <p onClick={props.click}>I'm a {props.name}! {props.children}</p>
            {/* <p>{props.children}</p> */}
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default person;