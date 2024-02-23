import { Link } from 'react-router-dom';
import "./_home.scss";
import marvelBc from '../../img/marvelBc.jpg';
function Home(params) {
    return (
        <>
            <div className='conteiner homewr'>
                <div className='title-sub'>
                    <h2>Lets learn more about marvel characters</h2>
                    <h4>marvel universe has many interesting characters. Folow us and learn a lot of them</h4>
                    <button><Link to="/Characters">Learn</Link></button>  
                </div>  
                <img src={marvelBc} alt="background" />
            </div>
        </>
    )

};
export default Home;