import { useState, useEffect } from "react";

const useFetch = url => {

    const [data, setData] = useState([]); // ? react hook to watch variable each times it gets updated
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState('');


    // useEffect to get posts data from json server on first reload
    useEffect(() => {

        // server url
        const serverRoot = 'https://my-json-server.typicode.com/rmihaja/kaiza-react/';

        // handle fetch operation to abort if user change view
        const abortController = new AbortController();
        
        // GET data from url
        fetch(serverRoot + url, { signal: abortController.signal })
            .then(res => {
                // return custom error if server response is not OK
                if (!res.ok) {
                    throw Error('Impossible d\'obtenir les données du serveur. Veuillez réactualiser');
                }
                // server returns response promise
                return res.json();
            })
            .then(data => {
                // response returns json data promise
                setData(data);
                setIsFetching(false);
                setError('');
            })
            .catch(err => {
                // catch abort error
                if (err.name === 'AbortError') {
                    console.log('fetch aborted');
                }
                else {
                    // store error, if any
                    setError(err.message);
                    setIsFetching(false);
                }
            });

        // return abort error if component is not in view anymore
        return () => abortController.abort();
    },
        // dependency of useEffect
        // ? we specified a dependency to call use effect only when passing/changing the url
        // ? to fetch the data from server
        [url]);

    return { data, setData, isFetching, error };
}
 
export default useFetch;