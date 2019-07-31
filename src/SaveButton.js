import React from 'react';
import CharacterComponent from './CharacterComponent.js';
import axios from 'axios';
import MainPanel from './MainPanel.js';

class SaveButton extends CharacterComponent{

    constructor(props){
        super(props);

        this.state['saveButtonText'] = 'Save';
        this.state['resetPending'] = false;

        this.save = this.save.bind(this);
        this.open = this.open.bind(this);
    }

    render(){
        if(this.state.saveButtonText !== 'Save' && !this.state.resetPending){
            this.setState({resetPending: true});
            setTimeout(() => {this.setState({resetPending: false, saveButtonText: 'Save'})}, 5000);
        }

        return(
            <div>
                <button onClick={this.save}>{this.state.saveButtonText}</button>
            </div>
        );
    }
    
    save(){
        var json = JSON.stringify(this.characterData.state);
        axios.post('http://' + window.location.hostname + ':3001/api/saveCharacter',
        {
            id: 2,
            message: json
        }).then((responce) => {
            if(responce.data.success){
                this.setState({saveButtonText: 'Success'});
            }
            else{
                this.setState({saveButtonText: 'Failed, Try Again'});
                console.log(JSON.stringify(responce));
            }
        });
    }

    open(){
        MainPanel.openMode();
    }

}

export default SaveButton;