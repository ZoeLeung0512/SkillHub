const openSidebar = () => {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
};

const closeSidebar = () => {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
};


const sendData = () => {

    const name = document.getElementById("username").value;
  
    const email = document.getElementById("email").value;
  
    const message = document.getElementById("password").value;
  
    const body = {
  
      values: [[name, email, message]]
  
    };
  
    const requestBody = {
  
      method: "POST",
  
      headers: {
  
        "Authorization": "AIzaSyBdZXPFV4MRoWZ6GNX4DLgZpL86o2LHK_I",
  
        "Content-Type": "application/json"
  
      },
  
      body: JSON.stringify(body)
  
    };
  
    fetch("https://sheets.googleapis.com/v4/spreadsheets/18_x5eZHMcYh0Z3kt1055w9FDj1aITS2uL3q5E0XTRhQ/values/Sheet1!A2:C2:append?key=AIzaSyBdZXPFV4MRoWZ6GNX4DLgZpL86o2LHK_I", requestBody)

      .then(response => {
  
        if (response.status === 200) {
  
          alert("Data sent successfully!");
  
        } else {
  
          alert("Failed to send data. Try again later.");
  
        }
  
      })
  
      .catch(error => {
  
        console.error(error);
  
        alert("Failed to send data. Try again later.");
  
      });
  
   }