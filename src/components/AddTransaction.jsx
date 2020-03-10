import React, {useState} from 'react'

function AddTransaction() {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(`${text} equals to ${amount}`)
    }

    return (
        <div>
            <h3>Add new transaction</h3>
            <form id="form" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input 
                        type="text" 
                        value={text}
                        onChange={e => setText(e.target.value)}
                        id="text" 
                        placeholder="Enter text..."
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br/>
                    (negative - expense, positive - income)
                    </label>
                    <input 
                        type="number" 
                        value={amount} 
                        onChange={e => setAmount(e.target.value)}
                        id="amount" 
                        placeholder="Enter amount..."
                    />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction
