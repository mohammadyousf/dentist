import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Signup = () => {
    const [fullname, setfullname] = useState("");
    const [email, setemail] = useState("");
    const [phonenumber, setphonenumber] = useState("");
    const [password, setpassword] = useState("");
    const [isloading, setloading] = useState(false);
    const navigate = useNavigate();


    const handleSubmit = (e) => {

        e.preventDefault();
        const user = { fullname, email, phonenumber, password };
        console.log(user);
        setloading(true);


        setTimeout(() => {
            fetch('http://localhost:8000/user', {
                method: 'POST',
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(user)
            }).then((res) => {
                console.log("new user is inserted", res.body);
                setloading(false);
                navigate('/Login');
            });
        }, 1000);



    }

    return (

        <div className="signup" >

            <form className="form-sigup" onSubmit={handleSubmit}>
                <label className="logo-signup">Sign Up</label><br /><br />


                {/* <label className="label-l">Full Name: </label> */}
                <input type="text" value={fullname} onChange={(e) => setfullname(e.target.value)} className="text-feiled" placeholder="Fullname" required /><br /><br />


                {/* <label className="label-l">Emaile: </label> */}
                <input type="email" value={email} onChange={(e) => setemail(e.target.value)} className="text-feiled" placeholder="Emaile" required /><br /><br />


                <input type="text" value={phonenumber} onChange={(e) => setphonenumber(e.target.value)} className="text-feiled" placeholder="PhoneNumber" required /><br /><br />

                <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} className="text-feiled" placeholder="password" required /><br /><br />
                {!isloading && <button class="btn btn-secondary btn-lg btn-block">Create User</button>}
                {isloading && <button disabled class="btn btn-secondary btn-lg btn-block">Create User....</button>}
                <Link class="nav-link" to="/Login"> Login ?</Link>

            </form>

        </div>
    );
}
export default Signup;