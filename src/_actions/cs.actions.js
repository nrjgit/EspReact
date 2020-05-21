import { CSConstants } from '../_constants';
import { CSSrch } from '../_services';
import config from 'config';


export function csSearch(formData) {
   
    return dispatch => {

    const requestOptions = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        async:true,
        body: JSON.stringify(formData)
    };

      fetch(`${config.apiUrl}/api/cs/Search`, requestOptions)
      .then(handleResponse)
        .then(res => {
           var result =res.data
    dispatch({ type: CSConstants.CSSrch, result });

    });

    };

    function handleResponse(response) {
        return response.text().then(text => {
            const data = text && JSON.parse(text);
            if (!response.ok) {
                if (response.status === 401) {
                    // auto logout if 401 response returned from api
                    logout();
                    location.reload(true);
                }
    
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
    
            return data;
        });
    }
        
}
