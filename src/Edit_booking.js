import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const Edit_booking = () => {
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [Case, setCase] = useState("");
    const [Payment, setpaymet] = useState("");
    const [date, setdate] = useState("");
    const [time, settime] = useState("");
    const [isloading, setloading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();



    useEffect(() => {
        console.log('id', id);
        fetch('http://localhost:8000/booking/' + id).then(res =>

            res.json()
        ).then(response => {

            console.log('asd', response);
            setfirstname(response.firstname);
            setlastname(response.lastname);
            setCase(response.Case);
            setpaymet(response.Payment);
            setdate(response.date);
            settime(response.time);
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const booking = { firstname, lastname, Case, Payment, date, time };
        console.log(booking);
        setloading(true);
        setTimeout(() => {
            fetch('http://localhost:8000/booking/' + id, {
                method: 'PUT',
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(booking)
            }).then(() => {
                console.log("the booking details are updated");
                setloading(false);
                // navigate('/');
            })
        }, 3000);
    }
    return (
        <div className="data-booking">
            <form onSubmit={handleSubmit}>
                <label>updated Booking</label><br /><br />
                <label>
                    FirstName:
                </label>
                <input type="text" required value={firstname} onChange={(e) => setfirstname(e.target.value)} /><br /><br />
                <label>
                    lastName:
                </label>
                <input type="text" required value={lastname} onChange={(e) => setlastname(e.target.value)} /><br /><br />
                <label>Case description</label>
                <textarea value={Case} onChange={(e) => setCase(e.target.value)}>
                </textarea><br /><br />
                <label>Payment method</label>
                <select value={Payment} onChange={(e) => setpaymet(e.target.value)}>
                    <option>VISA</option>
                    <option>Cach</option>
                    <option>Insurance</option>
                </select><br /><br />

                <label>Select Day</label>
                <input type="date" required value={date} onChange={(e) => setdate(e.target.value)} /><br /><br />

                <label>Select Time</label>
                <select value={time} onChange={(e) => settime(e.target.value)}>
                    <option>10-11</option>
                    <option>11-12</option>
                    <option>1-2</option>
                    <option>2-3</option>
                    <option>3-4</option>
                </select><br /><br />

                {!isloading && <button class="btn btn-success"> Update Booking </button>}
                {isloading && <button disabled class="btn btn-warning"> Update Booking... </button>}




            </form>



        </div>
    );
}
export default Edit_booking;