import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
    return (
        <>
        <div onClick = {() => props.whenKegClicked(props.id)}>
            <h4>{props.name}</h4>
            <p>{props.brand}</p>
            <p>{props.price}</p>
            <p>{props.alcoholContent}</p>
            <p>{props.pints}</p>
        </div>
        </>
    )
}

Keg.propTypes = {
    name: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.string,
    alcoholContent: PropTypes.string,
    pints: PropTypes.number,
    id: PropTypes.string,
    whenKegClicked: PropTypes.func
}

export default Keg;