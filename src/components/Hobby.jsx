import axios from 'axios';
import { useEffect } from 'react';
import '../css/App.css';
function App(props) {
    let userInfo = {
        'World' : 'world',
        'CharacterName' : 'name',
    };
    useEffect(() => { // useEffect에 빈 배열을 넣어줌으로써 한번만 실행한다.
        axios.post('http://localhost:8080',{})
        .then(function(response) {
            console.log(response);
            console.log(response.data.CharacterName._text);
            userInfo['CharacterName'] = response.data.CharacterName._text;
        })
        .catch(function(response) {
            console.log(response);
        })
    }, []);
    
    return (
    <div>
        <div className="flex-column-center page-skill">
            <div className="sub-heading">Wolrd : {userInfo.CharacterName}</div>
            <div className="sub-heading">Web Development : HTML, CSS, JQuery, React, SpringBoot</div>
            <div className="sub-heading">IDE : VS Code, AndroidStudio</div>
            <div className="sub-heading">DataBase : MySQL</div>
        </div>
        
    </div>
    );
}

export default App;