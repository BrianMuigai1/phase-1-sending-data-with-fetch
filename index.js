// Add your code here
function submitData() {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: "Steve",
      email: "steve@steve.com",
    }),
  })
    .then(function(response) {
      if (!response.ok) {
        throw new Error("Unauthorized Access");
      }
      return response.json();
    })
    .then(function(data) {
      // Update the DOM with the new ID value
      const newUserID = data.id;
      const idContainer = document.getElementById("newUserID");
      if (idContainer) {
        idContainer.textContent = `New User ID: ${newUserID}`;
      } else {
        console.error("Element with ID 'newUserID' not found in the document.");
      }
    })
    .catch(function(error) {
      // Append the error message to the DOM
      const errorContainer = document.getElementById("errorContainer");
      if (errorContainer) {
        errorContainer.textContent = error.message;
      } else {
        console.error("Element with ID 'errorContainer' not found in the document.");
      }
    });
}
