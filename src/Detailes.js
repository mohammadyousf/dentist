import { useParams } from 'react-router-dom';
import Usefetch from './Usefetch';
// import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const Detailes = () => {

    const { id } = useParams();
    // const navigate = useNavigate();
    const { data: medical, isloading, error } = Usefetch('http://localhost:8000/Medical/' + id);



    return (

        <div className="detalesinf">


            {error && <div>{error}</div>}
            {isloading && <div className="loading">LOADING.....</div>}
            {medical && <div className='detales'>

                <div key={medical.id}>
                    <label><h2>Information Doctor:</h2></label>
                    <h5>Name DR:{medical.Drname}</h5>
                    <h5>Experience:{medical.Experience}</h5>
                    <h5>Phone:{medical.phone}</h5>
                    <h5>Emaile:{medical.emile}</h5>
                    <button type="button" className="btn btn-success"><Link className='creat' to="/Createbooking">Creat a Booking </Link></button>

                </div>


            </div>}





        </div>





    );
}
export default Detailes;