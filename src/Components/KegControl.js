import React from "react";
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";
import EditKegForm from "./EditKegForm";
import KegDetail from "./KegDetail";
import { v4 } from "uuid";

class KegControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false,
            mainKegList: [
                {name: "Beer", brand: "Beer Brand", price: "200", alcoholContent: "8", pints: 124, id: v4()},
                {name: "Cider", brand: "Cider Brand", price: "100", alcoholContent: "7", pints: 124, id: v4()}
            ],
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
        const selectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0];
        this.setState({selectedKeg: selectedKeg})
    }

    handleDeletingKeg = (id) => {
        const newMainKegList = this.state.mainKegList.filter(keg => keg.id !== id);
        this.setState({
            mainKegList: newMainKegList,
            selectedKeg: null
        });
    }

    handleEditClick = () => {
        this.setState({editing: true});
    }

    handleEditingKegInList = (kegToEdit) => {
        const editedMainKegList = this.state.mainKegList
        .filter(keg => keg.id !== this.state.selectedKeg.id)
        .concat(kegToEdit);
        this.setState({
            mainKegList: editedMainKegList,
            editing: false,
            selectedKeg: null,            
        });
    }

    handleDecrementingPints = () => {
        const pickedKeg = this.state.selectedKeg;
        const pintsToEdit = {
            name: pickedKeg.name,
            brand: pickedKeg.brand,
            price: pickedKeg.price,
            alcoholContent: pickedKeg.alcoholContent,
            pints: pickedKeg.pints -=1,
            id: pickedKeg.id,
            key: pickedKeg.id
        }
        this.handleChangingSelectedKeg(pintsToEdit.id)
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
            onClickingEdit = {this.handleEditClick} 
            onClickingDecrememt = {this.handleDecrementingPints} />
            
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

export default KegControl;