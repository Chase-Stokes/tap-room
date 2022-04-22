import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
    const { keg, onClickingDelete } = props; 
    return (
        <>
        <h1>{keg.name} Details</h1>
        <p>{keg.brand}</p>
        <p>${keg.price}</p>
        <p>{keg.alcoholContent}%</p>
        <p>{keg.pints}</p>
        <button onClick={ props.onClickingEdit }>Update Keg Info</button>
        <button onClick={ props.onClickingDecrememt }>Decrement Pint</button>
        <button onClick={()=> onClickingDelete(keg.id) }>Remove Keg</button>
        </>
    );
}

KegDetail.propTypes = {
    keg: PropTypes.object,
    onClickingDelete: PropTypes.func,
    onClickingEdit: PropTypes.func,
    onClickingDecrememt: PropTypes.func
};

export default KegDetail;