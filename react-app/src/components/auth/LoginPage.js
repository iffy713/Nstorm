import LoginForm from "./LoginFormModal/LoginForm";
import './AuthPage.css'


export default function LoginPage(){

    return (
        <div className="auth-page-outer-ctn">
            <div className="auth-page-form-ctn">
                <LoginForm />
            </div>
        </div>
    )
}
