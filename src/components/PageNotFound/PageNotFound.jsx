import "./_page404.scss";
import { Link } from 'react-router-dom';
function pageNotFound() {
    return (
        <>
            <div className="container page-404">
                <h2>404</h2>
                <h3>page not found</h3>
                <div><button><Link to={'/'}>back to home page</Link></button></div>
            </div>
        
        </>
    )
};
export default pageNotFound;