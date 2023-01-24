import { useState } from 'react'
import jwt_decode from "jwt-decode";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function handleCredentialResponse(response) {
    const data = jwt_decode(response.credential)
    console.log(data);
    console.log(response);
  }
  window.onload = function () {
    google.accounts.id.initialize({
      client_id:
        "585709262284-9h80oqnjh4keusgfnrugav5fdu0qe3ve.apps.googleusercontent.com",
      callback: handleCredentialResponse,
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),{ 
        theme: "filled_black",
        size: "large",
        type: "standard",
        shape: "pill",
        text: "continue_with",
        logo_alignment: "left"
    } // customization attributes
    );
    google.accounts.id.prompt(); // also display the One Tap dialog
  };
  return (
    <div className="App">
     <div id="buttonDiv"></div>
    </div>
  )
}

export default App
