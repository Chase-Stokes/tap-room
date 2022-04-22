import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props){
    return (
        <React.Fragment>
            <hr/>
            {props.ticketList.map((keg) =>
            <Keg 
            whenTicketClicked = { props.onKegSelection }
            name = {keg.name}
            id = {ticket.id}
            key = {ticket.id}/>
            )}
        </React.Fragment>
    );
}

KegList.propTypes = {
    kegList: PropTypes.array,
    onKegSelection: PropTypes.func
};

export default KegList;