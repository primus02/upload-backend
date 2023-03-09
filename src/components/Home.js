import React , {useRef, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Register from './Register';

function Home() {
    const uploadRef= useRef();
    const navigate= useNavigate();

    const [emailTo, setEmailTo]= useState("");
    const [email, setEmail]= useState("");
    const [message, setMessage]= useState("");
    const [file, setFile]= useState(null);

const chooseFile=()=> {
      uploadRef.current.click();
}

const getFile=(e)=> {
  const fileData= e.target.files[0];

  console.log({fileData});
    setFile(fileData);

}

const handleUpload=(e)=> {
  e.preventDefault();
  const data={username: "senior", emailTo, email, message, file};

  console.log(data);

  // fetch("http://localhost:3000/upload-file", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify(data)
  // })
  // .then(res=> {
  //   if(res.message === "Invalid username"){
  //     alert("Invalid username")
  //     return;
  //   }
  //   if(res.message === "File uploaded successfully"){
  //     alert("File uploaded successfully")
  //   }
  // })
  // .catch(err=> console.log(err));
}



  return (
    <div className="home">
        <div className="uploader">
             <div className="sub-uploader">
                <p className="plus"> + </p>
                <div>
                    <h3 className="add">Add more files</h3>
                    <p className="data">Remaining 197GB</p>
                </div>
             </div>
             <div className="sub-uploader">
                <p className="dots">...</p>
                <input type="file" hidden ref={uploadRef} onChange={(e)=> getFile(e)}/>
                
                {!file ? (<button className="upload-btn" onClick={chooseFile}>upload</button>)
                : (<div>
                <p style={{width: "100%"}}><button style={{width: "100%", marginLeft: 0}} className="upload-btn" onClick={chooseFile}>{!file ? "upload file" : file.name}</button></p>
                <span style={{fontSize: "10px", fontWeight: "bold"}}>{"SIZE: " + file.size + "MB"}</span>
                </div>)}
            
             </div>
             <form onSubmit={handleUpload}>
                <input type="text" placeholder='Email to' required value={emailTo} onChange={(e)=> setEmailTo(e.target.value)}/>
                <input type="email" placeholder='Your email' required value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <textarea placeholder='Message' required value={message} onChange={(e)=> setMessage(e.target.value)}/>
                <p className="transfer-btn"><button className='upload-btn'>Transfer</button></p>
             </form>
             
        </div>
        <div className="join">
            <div>
              <h2>You can upload up to 200GB files</h2>
              <p className="info">We generate the best scenarios for everyone to make farming process easire and accessible</p>
             </div>
              <p className="buttons"><button className="join-btn" onClick={()=> navigate("/register")}>Become a member</button> <button className="login-btn"><Link to="/login">Log in</Link></button></p>
        </div>
        <div className="image">
             <img src="/images/pyram.png" alt="image"/>
        </div>
    </div>
  )
}

export default Home;