import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;

    if (error) {

        errorElement = <div>
            <p>Error: {error.message}</p>
        </div>

    }

    if (user || user1) {
        navigate('/home')
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                <div className='p-3 mb-1'>or</div>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
            </div>
            {errorElement}
            <div className=''>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-primary w-50 d-block mx-auto  mb-1'>
                    <img className='ps-5' style={{ height: '30px' }} src="https://clipart.info/images/ccovers/1559064732Google-Blue-Logo-G-Letter.png" alt="" />
                    <span className='ps-2'>Google SignIn</span>
                </button>
                <br />
                <button className='btn btn-primary w-50 d-block mx-auto mb-1 '>
                    <img className='ps-5' style={{ height: '30px' }} src="https://pnggrid.com/wp-content/uploads/2021/05/Facebook-logo-2021.png" alt="" />
                    <span className='ps-2 pt-2'>Facebook SignIn</span>
                </button>
                <br />
                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn-primary d-block mx-auto w-50 '>
                    <img className='ps-5' style={{ height: '30px' }} src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
                    <span className='ps-2'>Gighub SignIn</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;