import React , {useRef} from 'react';

function Home() {
    const uploadRef= useRef();

const chooseFile=()=> {
      uploadRef.current.click();
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
                <input type="file" hidden ref={uploadRef}/>
                <button className="upload-btn" onClick={chooseFile}>upload</button>
             </div>
             <form>
                <input type="text" placeholder='Email to'/>
                <input type="email" placeholder='Your email'/>
                <textarea placeholder='Message'/>
             </form>
             <p className="transfer-btn"><button className='upload-btn'>Transfer</button></p>
        </div>
        <div className="join">
            <div>
              <h2>You can upload up to 200GB files</h2>
              <p className="info">We generate the best scenarios for everyone to make farming process easire and accessible</p>
             </div>
              <p className="buttons"><button className="join-btn">Become a member</button> <button className="login-btn">Log in</button></p>
        </div>
        <div className="image">
             <img src="images/pyram.png" alt="image"/>
        </div>
    </div>
  )
}

export default Home;