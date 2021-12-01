import { Link } from 'react-router-dom';
import '../css/App.css';

function App(props) {
    return (
        <table className="menu">
            <tbody>
                <tr>
                    <td><Link to="/AboutMe">ABOUT ME!</Link></td>
                    <td><Link to="/Skill">SKILL!</Link></td>
                </tr>
                <tr>
                    <td><Link to="/Intro">Introduce</Link></td>
                    <td><Link to="/Hobby">HOBBY?</Link></td>
                </tr>
            </tbody>
        </table>
    );
}

export default App;