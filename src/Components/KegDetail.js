import React from "react";
import PropTypes from "prop-types";


const red = {color: "red"};
const green = {color: "green"};
const costCheck = (num) => {
    if (num > 100) {
        return red;
    } else {
        return green;
    }
};

function KegDetail(props){
    const { keg, onClickingDelete } = props; 
    return (
        <>
        <h1>{keg.name} Details</h1>
        <p>{keg.brand}</p>
        <p style={costCheck(keg.price)}>${keg.price}</p>
        <p>{keg.alcoholContent}%</p>
        <p>{keg.pints}</p>
        <button onClick={ props.onClickingEdit }>Update Keg Info</button>
        <button onClick={ props.onClickingDecrement }>Decrement Pint</button>
        <button onClick={()=> onClickingDelete(keg.id) }>Remove Keg</button>
        </>
    );
}

KegDetail.propTypes = {
    keg: PropTypes.object,
    onClickingDelete: PropTypes.func,
    onClickingEdit: PropTypes.func,
    onClickingDecrement: PropTypes.func
};

export default KegDetail;