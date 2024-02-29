import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import "./_help.scss";
function Help(params) {
    const { handleSubmit, register, formState: { errors } } = useForm();
    function onSubmit(values) {
        console.log(values);
    }
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
                    
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='form'>
                    <h3>CONTACT US</h3>
                    <div className="formItm">
                        <input className={errors.name ? 'error' : ''} type="text" placeholder='name'
                            {...register('name', {
                            required: 'Required',
                            pattern: {
                                value: /(\w|\s|[\.\'-])+/,
                                message:"incorrect name",
                            }
                        })}
                        />
                        <p className={'error-message'}>{errors.name && errors.name.message} </p>
                    </div>
                    <div className="formItm">
                        <input className={errors.name ? 'error' : ''} type="email" placeholder='Email'
                            {...register('email', {
                            required: 'Required',
                            pattern: {
                                value: /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message:"invalid email",
                            }
                        })}
                        />
                        <p className={'error-message'}>{errors.email && errors.email.message} </p>
                    </div>
                    <div className="formItm">
                        <textarea className={errors.message ? 'error' : ''} 
                        placeholder='Type your message'
                            {...register('message', {
                            required: 'Required',
                            pattern: {
                                value: /(\w|\s|[\.\'-])+/,
                                message:"incorrect message",
                            }
                        })}
                        />
                        <p className={'error-message'}>{errors.message && errors.message.message} </p>
                    </div>
                    <button type='submit'><p>Submit</p></button>
                </form>
                <div className="time">
                    <h4>Our business hours:</h4>
                    <p>Monday - Friday, 8:30AM - 5:30PM CT</p>
                </div>
            </div>
        
        
        </>
    )    
};
export default Help;