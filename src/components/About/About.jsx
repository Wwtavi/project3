import "./_about.scss";
import { Link } from 'react-router-dom';
function About(params) {
    return (
        <>
            <div className="conteiner aboutwr">
                <h2>Marvel Corporate Information</h2>
                <div className="info">
                    <div className="infoch">
                        <h3>Company Info and Contact</h3>
                        <p>
                            Marvel Entertainment, LLC, a wholly-owned subsidiary of The Walt Disney Company,
                            is one of the world's most prominent character-based entertainment companies, built on a
                            proven library of more than 8,000 characters featured in a variety of media over
                            seventy-five years. Marvel utilizes its character franchises in entertainment,
                            licensing and publishing. For more information visit marvel.com. © 2023 MARVEL
                        </p>
                    </div>
                    <div className="corporate">
                        <h4>Corporate Headquarters</h4>
                        <p><span>Marvel Entertainment, LLC</span> <br />1290 Avenue of the Americas.New York, NY 10104</p>
                    </div>
                    <div className="business">
                        <h4>Business Inquiries</h4>
                        <p>
                            For tech support, please visit the <Link to="/help">Help Page</Link><br />
                             General phone number, Marvel Entertainment, LLC: 212-576-400
                        </p>
                    </div>
                    <div className="consumer">
                        <h4>Consumer Inquiries</h4>
                        <p>
                            For FAQ's related to Marvel Comics and Marvel.com: Visit the <Link to="/help">Help Page</Link><br />
                            <span> Marvel.com, Marvel Comics app, and Marvel Digital Comics Unlimited Subscriptions:</span><br />
                            For any inquiries unresolved by the Help Page, please use the Contact Form <Link to="/help">Here</Link>
                        </p>
                        <p>
                            <span>For Print Subscriptions:</span> <br />Marvel Subscriptions. <br /> PO Box 727. <br /> New Hyde Park, NY 11040. <br />
                            TOLL FREE: 888-511-5480. <br />
                            <a href="mailto:marvelsubs@midtowncomics.com">marvelsubs@midtowncomics.com </a><br />
                            <span>See also:</span> <Link to="https://subscriptions.marvel.com/faq.asp">Subscriptions FAQ</Link>
                        </p>
                    </div>
                    <div className="media">
                        <h4>Media Relations</h4>
                        <p>Contact <a href="mailto:Ms-comms@marvelstudios.com">Ms-comms@marvelstudios.com</a></p>
                    </div>
                    <div className="terms">
                        <h3>Marvel Terms and Policies</h3>
                        <ul>
                            <li><Link to="https://privacy.thewaltdisneycompany.com/en/">Marvel.com Privacy Policy</Link></li>
                            <li><Link to="https://disneytermsofuse.com/">Marvel.com Terms and Conditions</Link></li>
                            <li><Link to="https://www.marvel.com/corporate/marvel_unlimited_subscriber_agreement">Marvel Unlimited Subscriber Agreement</Link></li>
                            <li><Link to="https://www.marvel.com/corporate/insider_terms">Marvel Insider Terms of Use</Link></li>
                        </ul>
                    </div>       
                </div>
            </div>
        </>
    )    
};
export default About;