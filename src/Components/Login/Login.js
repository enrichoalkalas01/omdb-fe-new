function Login() {
    const getData = () => {
        // // Call Ajax
        // var ajax = new XMLHttpRequest();
        // var method = "GET";
        // var url = "http://localhost:7777/product-api";
        // var asynchronous = true;
        // ajax.open(method, url, asynchronous);
        
        // // Sending ajax request
        // ajax.send();	
        // // Receiving response from data.php
        // ajax.onreadystatechange = function() {
        //     if (this.readyState == 4 && this.status == 200) {
        //         // Converting JSON back to array
        //         var data = JSON.parse(this.responseText);
        //         console.log(data); // For Debugging
        //     }
        // };

        // https://www.npmjs.com/package/@react-oauth/google

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        
        fetch("http://localhost:7777/product-api", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }

    getData()

    return('login')
}

export default Login