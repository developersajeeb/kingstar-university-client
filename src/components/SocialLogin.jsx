import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const {googleSingIn, githubSingIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleGoogleSingIn = () => {
        googleSingIn()
        .then(result => {
            console.log(result.user);
            navigate(from, {replace: true});
        })
    }

    const handleGithubSingIn = () => {
        githubSingIn()
        .then(result => {
            console.log(result.user);
            navigate(from, {replace: true});
        })
    }
    return (
        <div className='flex gap-5 justify-center'>
            <img onClick={handleGoogleSingIn} className='w-8 cursor-pointer' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png" alt="" />
            <img onClick={handleGithubSingIn} className='w-8 cursor-pointer' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" alt="" />
        </div>
    );
};

export default SocialLogin;