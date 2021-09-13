import '../css/App.css';

function App(props) {
    let height = window.innerHeight / 2;
    let width = window.innerWidth / 2;
    function xhandler() {
        return -50 - (props.x - width) / 400;
    }
    function yhandler() {
        return -50 - (props.y - height) / 120;
    }
    return (
    <div className="main-font"  style={{transform: "translate(" + xhandler() + "%," + yhandler() +"%)"}}>
        <div className="flex-row-center">
            <div className="flex-row-center icon-name-section">
                <div className="svg-div"><img className="svg-size" src="images/user.svg" alt="userImage"/></div>
                <div className="sub-heading">이름 </div>
                <div className="content">권영민</div>
            </div>
            <div className="flex-row-center icon-name-section">
                <div className="svg-div"><img className="svg-size" src="images/calendar.svg" alt="userImage"/></div>
                <div className="sub-heading">생년월일 </div>
                <div className="content">96.03.11</div>
            </div>
            <div className="flex-row-center icon-name-section">
                <div className="svg-div"><img className="svg-size" src="images/phone.svg" alt="userImage"/></div>
                <div className="sub-heading">연락처 </div>
                <div className="content">010-8538-3563</div>
            </div>
        </div>
        
        <div className="flex-row-center">
            <div className="flex-row-center icon-name-section">
                <div className="svg-div"><img className="svg-size" src="images/address.svg" alt="userImage"/></div>
                <div className="sub-heading">주소지 </div>
                <div className="content">경상남도 진주시</div>
            </div>
            <div className="flex-row-center icon-name-section">
                <div className="svg-div"><img className="svg-size" src="images/email.svg" alt="userImage"/></div>
                <div className="sub-heading">이메일 </div>
                <div className="content">ymkwon3@gmail.com</div>
            </div>
            <div className="flex-row-center icon-name-section">
                <div className="svg-div"><img className="svg-size" src="images/education.svg" alt="userImage"/></div>
                <div className="sub-heading">학력 </div>
                <div className="content">국립경상대학교 컴퓨터과학과</div>
            </div>
        </div>
    </div>
    );
}

export default App;