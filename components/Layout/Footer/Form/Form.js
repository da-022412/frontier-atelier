import { useForm, ValidationError } from '@formspree/react';

import formStyles from './Form.module.scss';

import BodyText from '../../../BodyText';
import Heading from '../../../Heading';

const Form = () => {
    const [state, handleSubmit] = useForm('myyojjde');

    if (state.succeeded) {
        return <BodyText>Thanks for your submission!</BodyText>;
    }

    return (
        <div className={`${formStyles['form-container']}`}>
            <Heading style='heading-5' level='5'>
                Get Updates
            </Heading>
            <form onSubmit={handleSubmit} className={formStyles.form}>
                <label htmlFor='submission' hidden>
                    Email
                </label>
                <input
                    id='submission'
                    placeholder='Enter email address'
                    name='email'
                    type='email'
                    required
                />
                <ValidationError
                    prefix='Email'
                    field='email'
                    errors={state.errors}
                />
                <button
                    type='submit'
                    disabled={state.submitting}
                    className={`${formStyles['submit-button']}`}
                >
                    Submit
                </button>
                <ValidationError errors={state.errors} />
            </form>
        </div>
    );
};

export default Form;
