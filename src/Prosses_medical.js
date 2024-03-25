import Usefetch from "./Usefetch";
import Medical_center from "./Medical_center";

const prosses_medical = () => {


    const { data: medical, isloading, error } = Usefetch('http://localhost:8000/Medical')



    return (

        <div>
            {error && <div>{error}</div>}
            {isloading && <div className="loading">LOADING.....</div>}
            {medical && <Medical_center medical={medical} />}
        </div>

    );
}
export default prosses_medical;