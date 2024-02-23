import { Link } from 'react-router-dom';
import "./_help.scss";
function Help(params) {
    return (
        <>
            <div className='conteiner helpwr'>
                <h2>Welcome to Marvel Customer Support</h2>
                <div className="topics">
                    <h3>POPULAR TOPICS</h3>
                    <ul>
                        <li><Link to="https://help.marvel.com/hc/en-150/articles/4404325831195-How-do-I-upgrade-my-Marvel-Unlimited-membership">How do I upgrade my Marvel Unlimited membership?</Link></li>
                        <li><Link to="https://help.marvel.com/hc/en-150/articles/4404325762203-Can-I-preview-Marvel-Unlimited-before-I-subscribe">Can I preview Marvel Unlimited before I subscribe?</Link></li>
                        <li><Link to="https://help.marvel.com/hc/en-150/articles/16031668203931-Learn-More-About-Purchased-Redeemed-Digital-Comics-in-Marvel-Unlimited">Learn More About Purchased / Redeemed Digital Comics in Marvel Unlimited</Link></li>
                    </ul>
                    <button><Link to="https://help.marvel.com/hc/en-150/requests/new">Get in touch with us</Link></button>
                </div>
                <div className="time">
                    <h4>Our business hours:</h4>
                    <p>Monday - Friday, 8:30AM - 5:30PM CT</p>
                </div>
            </div>
        
        
        </>
    )    
};
export default Help;