import { Link } from 'react-router-dom';
import '../css/Menu.css';

function App(props) {
    return (
        <table className="menu">
            <tbody>
                <tr>
                    <td><section className="front"/><section className="back"><Link to="/who">Who Am I?</Link></section></td>
                    <td><section className="front"/><section className="back">Who Am I?</section></td>
                    <td><section className="front"/><section className="back">Who Am I?</section></td>
                </tr>
                <tr>
                    <td><section className="front"/><section className="back">Who Am I?</section></td>
                    <td><section className="front"/><section className="back">Who Am I?</section></td>
                    <td><section className="front"/><section className="back">Who Am I?</section></td>
                </tr>
                <tr>
                    <td><section className="front"/><section className="back">Who Am I?</section></td>
                    <td><section className="front"/><section className="back">Who Am I?</section></td>
                    <td><section className="front"/><section className="back">Who Am I?</section></td>
                </tr>
            </tbody>
        </table>
    );
}

export default App;