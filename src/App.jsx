import { useState } from "react"



function App() {
  
  let nameregex = /^[a-zA-Z ]{4,40}$/ ;
  let emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let passwordregex =  /^[@#][A-Za-z0-9]{7,13}$/ ;

  let [text , setText] = useState({

    firstname: "",
    email: "",
    address: "",
    pass: ""

  });
  
  let [error , setError] = useState({

    firstname: "",
    email: "",
    address: "",
    pass: "",

  });

  let [show , setShow] = useState(true);

  let handleinput = (event) => {
 
    let {name , value} = event.target
    setText({...text , [name]:value});
    
  }

  let handlebtn = () => {

    if (text.firstname == ""){
 
      setError({firstname: "Please Enter Your Name"});
      
    }

    else if(!text.firstname.match(nameregex)){
      
      setError({firstname: "Please enter your valid name"});
      
    }
    
    else if(text.email == ""){
      
      setError({firstname: ""});
      setError({email: "Please Enter Your Email"});

    }

    else if(!text.email.match(emailregex)){
     
      setError({email: "Please Enter Your Valid Email"});

    }
    
    else if(text.address == ""){

      setError({email: ""});
      setError({address: "Please Enter Your Address"});

    }
    
    else if(text.pass == ""){
   
      setError({address: ""});
      setError({pass: "Please Enter Your password"});

    }
    
    // else if (!text.pass.match(passwordregex)){
      
    //   setError({pass: "Please Enter Your character , Number , symbol submit "});

    // }
    
    else{

      setError({pass: " "});
      alert("Submit");
      setShow(false);
    }

  }

  return (
    <>
       <div className="input_main">
        {show ?
            <div className="input_card">
                <input onChange={handleinput} name="firstname" placeholder="Enter Your Name" className="input1"/>
                <p>{error.firstname}</p>
                <input onChange={handleinput} name="email" placeholder="Enter Your Email" className="input2"/>
                <p>{error.email}</p>
                <input onChange={handleinput} name="address" placeholder="Enter Your Address" className="input3"/>
                <p>{error.address}</p>
                <input onChange={handleinput} name="pass" type="password" placeholder="Enter Your password" className="input4"/>
                <p>{error.pass}</p>
                <button onClick={handlebtn} className="btn">Submit</button>
            </div>
         
         :

              
              <div className="input_result">
                  <h2>Your Name: <p>{text.firstname}</p></h2>
                  <h2>Your Email: <p>{text.email}</p></h2>
                  <h2>Your Address: <p>{text.address}</p></h2>
                  <h2>Your Password: <p>{text.pass}</p></h2>
              </div>

        }

       </div>

    </>
  )
}

export default App
