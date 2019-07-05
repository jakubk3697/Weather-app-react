import React from 'react';
import './Form.css';


const Form = props => {
    return (
        <form className="submForm" onSubmit={props.submit}>
            <input
                className="inpCity"
                type="text"
                placeholder="Wpisz miasto..."
                value={props.value}
                onChange={props.inputChange}
            />
            <button className="btnSubm">Sprawdź pogodę</button>
        </form>
    );
}

export default Form;