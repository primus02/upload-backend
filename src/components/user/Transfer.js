import React from 'react'

function Transfer() {
  return (
    <div className="transfer-cont">
        <div className="header">
            <h2>Transfer</h2>
            <input type="text" placeholder='search....'/>
        </div>
        <div className="sort-by">
            <div className="action-type">
                <h4>Sent</h4>
                <h4>Receive</h4>
            </div>
            <h4>Sort By Date</h4>
        </div>
        <hr />
        <div className="histories">
            <div class="history">
                <h3>March 2023</h3>
                <div className="histories-by-date">
                    <div className="single-history">
                        <h3>backend data</h3>
                        <div className="history-content">
                            <div className="details">
                                <span>1 time - </span>
                                <span>1688 files - </span>
                                <span>14.4 MB - </span>
                                <span>Sent 8 March 2023 - </span>
                                <span className="expiry"><span>!  </span>Expires in 6 days</span>
                            </div>
                            <p> {">"} </p>
                        </div>
                    </div>
                    <div className="single-history">
                        <h3>backend data</h3>
                        <div className="history-content">
                            <div className="details">
                                <span>1 time - </span>
                                <span>1688 files - </span>
                                <span>14.4 MB - </span>
                                <span>Sent 8 March 2023 - </span>
                                <span className="expiry"><span>!  </span>Expires in 6 days</span>
                            </div>
                            <p> {">"} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Transfer;