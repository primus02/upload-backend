import React from 'react'

function Uploader() {
  return (
    <div className="side-uploader">
        <div className="file-upload">
           <p className="sign">+</p>
           <div className="upload-link">
              <h3>Upload files</h3>
              <p>Or select a folder</p>
           </div>
        </div>
        <hr />
        <div className="upload-file">
            <form>
                <input type="text" placeholder='Title' required/>
                <textarea placeholder='Message' required/>
                <div className="get-btn">
                    <p>...</p>
                    <button>Get a link</button>
                </div>
            </form>
        </div>
       
    </div>
  )
}

export default Uploader;