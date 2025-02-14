import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div className="card" style={{overflow:"hidden"
    }}>
      <img src="https://imgs.search.brave.com/-AXoODKHVIvHhwSkclvPM7d0uyoQ91UQcj3tSX8_BYw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQw/ODI1NTAyNC9waG90/by9kZXZlbG9wZXJz/LWRpc2N1c3Npbmct/cHJvZ3JhbW1pbmct/Y29kZS5qcGc_Yj0x/JnM9MTcweDE3MCZr/PTIwJmM9WmQ3M0I5/N3pzeEdsclVZTTdl/MDRaWktFSE9iNEg4/X09BWks4T2FxZ19G/ND0" alt="" width={333} style={{border: "2px solid black"}} />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default Card