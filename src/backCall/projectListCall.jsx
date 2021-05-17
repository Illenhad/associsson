import axios from "axios";

export const httpRequestUpdateProject= () => {

    axios.get(`localhost/projectList`)
    .then(response => {

      console.log("Status: ", response.status);
      console.log("Data: ", response.data);
      return response

    }).catch(error => {

      console.error('Something went wrong!', error);
      return error

    });
    
}