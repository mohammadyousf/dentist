import Usefetch from './Usefetch';
import { useParams } from 'react-router-dom';

import { useNavigate } from "react-router-dom";

const Booking = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const { data: Booking, isloading, error } = Usefetch('http://localhost:8000/booking/' + id);

    const deletebooking = () => {
        fetch('http://localhost:8000/booking/' + Booking.id, {
            method: 'DELETE'
        }).then(() => { navigate('/'); })
    }
    const Edit_booling = () => {
        navigate('/Edit_booking/' + Booking.id);
    }

    return (
        <div className='data-booking'>

            {error && <div>{error}</div>}
            {isloading && <div className="loading">LOADING.....</div>}

            {Booking && <div>

                <div key={Booking.id}>
                    <label><h2>Information Booking:</h2></label>
                    <h5>FirstName:{Booking.firstname}</h5>
                    <h5>LastName:{Booking.lastname}</h5>
                    <h5>Case:{Booking.Case}</h5>
                    <h5>Payment:{Booking.Payment}</h5>
                    <h5>Date:{Booking.date}</h5>
                    <h5>Time:{Booking.time}</h5>
                    <button type="button" class="btn btn-danger" onClick={deletebooking}>Delete</button>
                    <button type="button" class="btn btn-warning" onClick={Edit_booling}>Edit Jacket</button>




                </div>
            </div>}





        </div>
    );

}
export default Booking;