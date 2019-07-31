import React from 'react';
import MainPanel from './MainPanel.js';

class OpenPanel extends React.Component{
    constructor(props){
        super(props);

        this.state = {data: null};

        this.open = this.open.bind(this);
        this.characterToHTML = this.characterToHTML.bind(this);
    }

    render(){

        if(this.state.data === null){
            this.open();
            return(
                <h1>
                    Loading
                </h1>
            )
        }
        else{
            return(
                <div>
                    <h1>
                        Create New character
                    </h1>
                    <p>
                        <button onClick={() => MainPanel.createMode()}>new</button>
                    </p>
                    {this.state.data.map(this.characterToHTML)}
                </div>
            )
        }
    }

    collectionsToHTML(x, y){
        return(
            <p>
                {x}
            </p>
        )
    }

    characterToHTML(x, y){
        return (
            <div>
                <p>
                    <button onClick={() => this.loadCharacter(x)}>
                        Name: {x}
                    </button>
                </p>
            </div>
        )
    }

    loadCharacter(characterState){
        MainPanel.loadCharacter(characterState);
    }

    open(){
        fetch('http://' + window.location.hostname + ':3001/api/getCharacters').then((data) => data.json()).then((res) => this.setState({data: res.data}));
    }
}

export default OpenPanel;