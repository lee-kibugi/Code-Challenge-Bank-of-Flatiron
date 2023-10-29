import React from 'react'

function AddTransaction() {
  return (
    <div>



        <div>Add Transaction</div>
        <form>
            <label htmlFor="description">Description: </label>
            <br />
            <input type='text' placeholder='Enter description'/>
            <br />
            <label htmlFor="description">Category: </label>
            <br />
            <select>
                <option value="Income">Income</option>
                <option value="Food">Food</option>
                <option value="Fashion">Fashion</option>
                <option value="Gift">Gift</option>
                <option value="Housing">Housing</option>
                <option value="Transportation">Transportation</option>
                <option value="Entertainment">Entertainment</option>
            </select>

            <br />
            <label htmlFor="Amount">Amount: </label>
            <br />
            <input type='number' placeholder='Enter amount'/>
             
            <br />
            <label htmlFor="date">Select Date: </label>
            <br />
            <input type="date" />

            <br />

            <button type='submit'>
                Submit
            </button>

        </form>
    </div>
  )
}

export default AddTransaction