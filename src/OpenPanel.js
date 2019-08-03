import React from 'react';
import MainPanel from './MainPanel.js';
import LoadButton from './LoadButton.js';

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
                        Characters
                    </h1>
                    <p>
                        <button onClick={() => MainPanel.newCharacter()}>new</button>
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
            <LoadButton id={x._id} text = {x.playerName + ': ' + x.name}/>
        )
    }

    loadCharacter(id){
        MainPanel.loadCharacter(id);
    }

    open(){
        fetch('http://' + window.location.hostname + ':3001/api/getCharacters').then((data) => data.json()).then((res) => this.setState({data: res.data}));
    }
}

export default OpenPanel;