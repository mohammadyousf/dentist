import { useEffect, useState } from "react";

const Usefetch = (url) => {

    const [data, setdata] = useState(null);
    const [isloading, setisloading] = useState(true);
    const [error, seterror] = useState(null);


    useEffect(() => {
        setTimeout(() => {

            fetch(url).then(response => {

                console.log(response);

                if (!response.ok) {
                    throw Error("data could not be fetched");
                }
                return response.json();
            })
                .then(data => {
                    console.log(data);
                    setdata(data);
                    setisloading(false);


                }).catch(err => {
                    console.log(err.message);
                    seterror(err.message);
                    setisloading(false);



                })

        }, 3000)
    }, [url]);





    return { data, isloading, error };
}
export default Usefetch;