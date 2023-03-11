import React from 'react'

function Upgrade() {
  return (
    <div className="upgrade">
        <div className="heading">
            <h2>You've got the ideas, we've got the plans</h2>
            <p>Whether you're sending big files for fun or delivering work for clients- keep creative projects moving forward with HonorRoads</p>
        </div>
        <div className="plans">
            <div className="plan">
                <h3>Choose your plan</h3>
                <p>
                   <input type="radio" name="period"/>
                   <label>Monthly billing</label>
                </p>
                <p>
                   <input type="radio" name="period"/>
                   <label>Yearly billing</label>
                </p>
                 <p className="save">Save 17% (ooh yeah)</p>
            </div>
            <div className="free single">
                <div className="details-info">
                    <h2>Free</h2>
                    <h4>Send files once in a while</h4>
                    <p>{">"} Send up to 2 GB</p>
                    <p>{">"} No need to verify transfers</p>
                </div>
                <hr />
                <div className="rate">
                    <h2>US$ 0</h2>
                    <p>no money, no problem</p>
                </div>
                <p className="single-btn"><button>Current plan</button></p>
            </div>
            <div className="pro single">
                <div className="details-info">
                    <h2>Pro</h2>
                    <h4>Send really big files regularly</h4>
                    <p>{">"} Send and receive up to 200 GB</p>
                    <p>{">"} 1 TB storage per person</p>
                    <p>{">"} 1 portal, unlimited reviews</p>
                </div>
                <hr />
                <div className="rate">
                    <h2>US$ 10 <span> /month</span></h2>
                    <p>per person, billed yearly</p>
                </div>
                <p className="single-btn"><button>Upgrade</button></p>
            </div>
            <div className="premium single">
                <div className="details-info">
                    <h2>Premium</h2>
                    <h4>Share work with no limits</h4>
                    <p>{">"} No size limit on transfers</p>
                    <p>{">"} Unlimited storage</p>
                    <p>{">"} Unlimited portals and reviews</p>
                </div>
                <hr />
                <div className='rate'>
                    <h2>US$ 19 <span> /month</span></h2>
                    <p>per person, billed yearly</p>
                </div>
                <p className="single-btn"><button>Upgrade</button></p>
            </div>
        </div>
    </div>
  )
}

export default Upgrade;