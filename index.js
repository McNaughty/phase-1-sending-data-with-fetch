// Add your code here

const name = ""
const email = ""

function submitData (name, email){
    //makes a POST request to /users with a name and email
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            name: "Steve",
            email: "steve@steve.com"
        })
        
    }
    
    return fetch("http://localhost:3000/users", configurationObject)
    .then (function (response) {
        const data = response.json()
        return data;
        console.log(data);
      })
    
      //handles the POST request response, retrieves the new id value and appends it to the DOM
    .then(function (data) {
        //return data;
        const dataGrabbed = document.getElementById("dataID");
       // const p = document.createElement('p');
        dataGrabbed.innerHTML = data.id; 
        //dataGrabbed.appendChild(p);
        return dataGrabbed
        
    })

    .catch (function (error) {
        const errMessage = document.getElementById("dataID");
        errMessage.innerHTML = ('Request failed', error);
        //console.log('Request failed', error);
    })


}

submitData();