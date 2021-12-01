import axios from 'axios';
import { useEffect, useState } from 'react';
import '../css/App.css';
import '../css/Page.css';
function App(props) {
    const [userInfo, setUserInfo] = useState({
        'WorldName': '',
        'CharacterName': '',
        'JobDetail': '',
        'Lev': '',
        'AvatarImgURL': '',
        'userid': ''
    });
    useEffect(() => { // useEffect에 빈 배열을 넣어줌으로써 한번만 실행한다.
        //프론트엔드에서 정보를 언제 불러오는게 맞을까?
        //db서버에서 따로 불러오자.

        axios.post('http://localhost:8080/', {})
            .then(function (response) {
                console.log(response.data);
                setUserInfo(response.data);
            })
            .catch(function (response) {
                console.log(response);
            })

    }, []);

    return (
        <>
            <div className="flex-column-center">
                <div className="sub-heading" style={{margin: '5rem 0'}}>게임을 좋아하며 현재는 메이플스토리를 플레이합니다.<br/>
                메이플스토리에서 제공하는 SOAP API를 통해 정보를 불러왔습니다.</div>

                <div className="flex-row-center">
                    <div className="flex-column-center page-flex-start" style={{ width: '22rem' }}>
                        <div className="sub-heading">World : {userInfo['WorldName']['_text']}</div>
                        <div className="sub-heading">Name : {userInfo['CharacterName']['_text']}</div>
                        <div className="sub-heading">Job : {userInfo['JobDetail']['_text']}</div>
                        <div className="sub-heading">Lev : {userInfo['Lev']['_text']}</div>
                        <div className="sub-heading">UserId : {userInfo['userid']}</div>
                    </div>
                    <img className="character" src={userInfo['AvatarImgURL']['_text']} alt="Avatar"></img>
                </div>
                
            </div>
        </>
    );
}

export default App;