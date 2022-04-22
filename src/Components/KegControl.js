import React from "react";
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";
import EditKegForm from "./EditKegForm";
import KegDetail from "./KegDetail";

class KegControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false,
            mainKegList: [],
            selectedKeg: null,
            editing: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        if (this.state.selectedKeg != null) {
            this.setState({
                formVisibleOnPage: false,
                selectedKeg: null,
                editing: false
            });
        } else {
            this.setState(prevState => ({
                formVisibleOnPage: !prevState.formVisibleOnPage
            }));
        }
    }

    handleAddingNewKegToList = (newKeg) => {
        const newMainKegList = this.state.mainKegList.concat(newKeg);
        this.setState({
            mainKegList: newMainKegList,
            formVisibleOnPage: false
        });
    }

    handleChangingSelectedKeg = (id) => {
        
    }

    render() {
        let currentlyVisibleState = null;
        let buttonText = null;
        if (this.state.editing) {
            currentlyVisibleState = <EditKegForm 
            keg = {this.state.selectedKeg} 
            onEditKeg = {this.handleEditingKegInList} />

            buttonText = "Return To Keg List";
        } else if (this.state.selectedKeg != null) {
            currentlyVisibleState = <KegDetail 
            keg = {this.state.selectedKeg}
            onClickingDelete = {this.handleDeletingKeg}
            onClickingEdit = {this.handleEditClick} />
            
            buttonText= "Return To Keg List";
        } else if (this.state.formVisibleOnPage) {
            currentlyVisibleState = <NewKegForm
            onNewKegCreation = {this.handleAddingNewKegToList} />

            buttonText = "Return To The Keg List";
        } else {
            currentlyVisibleState = <KegList 
            kegList = {this.state.mainKegList}
            onKegSelection = {this.handleChangingSelectedKeg} />

            buttonText = "Add A Keg";
        }

        return (
            <>
                {currentlyVisibleState}
                <button onClick = {this.handleClick}>{buttonText}</button>
            </>
        )
    }
}