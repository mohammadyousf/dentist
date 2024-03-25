import { Link } from 'react-router-dom';

const Medical_center = ({ medical }) => {



    return (



        <div className="perintcared">
            {medical.map((medicals) => (
                <div class="card" key={medicals.id}>
                    <img src={medicals.imge} class="card-img-top" alt="" />

                    <div class="card-body">
                        <h5 class="card-title">Medical Name:<h6>{medicals.name}</h6></h5>
                        <h5 class="card-title">Medical Location:<h6>{medicals.location}</h6></h5>
                        <h5 class="card-title">Medical Working hours:<h6>{medicals.field}</h6></h5>

                        <Link to={`/Detailes/${medicals.id}`} className="btn btn-primary">Details</Link>
                    </div>
                </div>
            ))}
        </div>

    );

}
export default Medical_center;