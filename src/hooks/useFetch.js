import { useState, useEffect } from "react";

const useFetch = url => {

    const [data, setData] = useState([]); // ? react hook to watch variable each times it gets updated
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState('');

    // useEffect to get posts data from json server on first reload
    useEffect(() => {
        console.log('useEfect called');
        // GET data from url
        fetch(url)
            .then(res => {
                // return custom error if server response is not OK
                if (!res.ok) {
                    throw Error('Could not fetch the data from server. Please refresh');
                }
                // server returns response promise
                return res.json();
            })
            .then(data => {
                // response returns json data promise
                setData(data);
                setError('');
            })
            .catch(err => {
                // store error, if any
                setError(err.message);
            });
        setIsFetching(false);
    },
        // dependency of useEffect
        // ? we specified a dependency to call use effect only when passing/changing the url
        // ? to fetch the data from server
        [url]);

    return { data, isFetching, error };
}
 
export default useFetch;