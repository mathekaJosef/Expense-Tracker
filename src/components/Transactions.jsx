import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

function Transactions() {
    const context = useContext(GlobalContext)
    console.log(context)
    
    return (
        <div>
            <h3>History</h3>
            <ul id="list" className="list">
                <li className="minus">
                    Cash <span>-$400</span>
                    <button className="delete-btn">x</button>
                </li>
            </ul>
        </div>
    )
}

export default Transactions
