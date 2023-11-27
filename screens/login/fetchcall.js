const dashboard = {
    getvals(){
  
      return fetch("http://192.168.2.135:8084/WebAPI/GetEmployee",
      {method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify( {
            'No_': 'ta',    // <= can return this value on server
            'Name': '2',    // <= can return this value on server
        }),
      })
      
      .then((res) => res.json()).then((responseData) => {
        console.log(responseData);
        return responseData;
      })
      .catch((error) => { console.warn(error); });
    
      // return 'test_val'';
    }
  }
  export default dashboard;  