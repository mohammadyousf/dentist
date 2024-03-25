import { Link } from "react-router-dom";
const Login = () => {


    return (


        <div className="ligin">
            <form className="loginform">
                <label className="label-login">Login</label><br />


                <label>Username</label>
                <input type="text" className="loginfiled" required placeholder="Username" /><br /><br />


                <label>password</label>
                <input type="password" className="loginfiled" required placeholder="password" /><br /><br />
                <button type="button" class="btn btn-secondary btn-lg btn-block">Login User</button>
                <Link class="nav-link" to="/Signup"> Sign up?</Link>






            </form>



        </div>
    );
}
export default Login