import React from 'react';

import FormInput from '../form-imput/form-input.component'
import CustomButton from '../custom-button/cutstom-button.component'

import { signInWithGoogle} from '../../firebase/firebase.utils'

import './sign-in.style.scss';

class SingIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = event => {
        const {value, name } = event.target;
        this.setState({[name]: value});
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''});
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        value={this.state.email}
                        handelChange={this.handleChange}
                        label='email'
                    required />
                    <FormInput
                        name='password'
                        type="password"
                        value={this.state.password}
                        handelChange={this.handleChange}
                        label='password'
                    required />
                    <div className='buttons'>
                        <CustomButton type='submit'>SUGN IN</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            {' '}Sign in with Google{' '}
                        </CustomButton>
                    </div>

                </form>
            </div>
        )
    }

}

export default SingIn;
