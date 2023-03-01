import axios from 'axios';

const BASE_URI = process.env.REACT_APP_API_ENDPOINT

const headers = {
    'Content-Type': 'application/json',
}
export function getData(setResponse, setLoading, setError) {
    axios({
        url: BASE_URI + 'Product',
        headers: headers,
    })
        .then((response) => {
            if (response.data) {
                // ----- 
                // Sort the response by euro percentage DESC 
                // -----
                let sortedResponse = response.data.sort((a, b) => {
                    return (a?.fondEuroPourcentage > b.fondEuroPourcentage ? -1 : 1)
                })
                // ----- 
                // Remove 2nd item 
                // -----
                sortedResponse.splice(1, 1);
                setResponse(sortedResponse)

                // ----- 
                // Loading complete 
                // -----
                setLoading(false)
            } else {
                setError(true)
            }
        }, (err) => {
            setError(true)
        });
}
