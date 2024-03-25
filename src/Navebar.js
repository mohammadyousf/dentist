

import { Link } from "react-router-dom";

const Navebar = () => {



    return (

        //    < !--Load an icon library to show a hamburger menu(bars) on small screens-- >


        <header>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">DENTIST.COM</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Signup"> Sign up</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Login">Login</Link>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About us</a>
                            </li>


                        </ul>

                    </div>
                </div>
            </nav>
        </header>

    );


}
export default Navebar;