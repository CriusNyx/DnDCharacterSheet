import React from 'react';
import Character from './Character.js';
import OpenPanel from './OpenPanel.js';
import CharacterData from './CharacterData.js';
import WeaponData from './WeaponData.js';

class MainPanel extends React.Component{
    static mainPanel = null;

    constructor(props){
        super(props);

        this.state = {
            character: <Character/>,
            open: <OpenPanel/>,
            mode: 'open'
        };

        MainPanel.mainPanel = this;
    }

    render(){
        return (
            <div>
                {this.state[this.state.mode]}
            </div>
        )
    }

    static loadCharacter(characterName){

        var query = characterName.replace(' ', '+');

        var req = 'http://' + window.location.hostname + ':3001/api/getCharacter?name=' + query;

        fetch(req).then((data) => data.json()).then((res) => MainPanel.loadCharacterData(res));
    }

    static loadCharacterData(res){
        if(res['success']){

            var characterJSON = res.data.message;

            var character = JSON.parse(characterJSON);

            character.weapon1 = new WeaponData(character.weapon1);
            character.weapon2 = new WeaponData(character.weapon2);
            character.weapon3 = new WeaponData(character.weapon3);

            CharacterData.getCharacterByID('').setState(character);

            MainPanel.createMode();
        }
    }

    static createMode(){
        MainPanel.mainPanel.setState({mode: 'character'});
    }

    static openMode(){
        MainPanel.mainPanel.setState({mode: 'open'});
    }
}

export default MainPanel;