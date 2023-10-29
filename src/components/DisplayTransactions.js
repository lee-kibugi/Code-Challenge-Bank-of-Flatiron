import React, { useEffect, useState } from 'react'

function DisplayTransactions() {

    const [transactions, setTransactions] = useState([]);

    const [query, setQuery] = useState('');
    useEffect(()=>{
        fetch('http://localhost:4000/transactions')
        .then(response => response.json())
        .then(response => {
            setTransactions(response);
        })
    },[])
  return (
    <div>

        <form>
            <input 
            type="text" 
            onChange={(e)=>setQuery(e.target.value)} 
            placeholder='Search....' id="search" 
            />
        </form>

        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                    <th>Date</th>
                </tr>

            </thead>
            <tbody>
            {
            transactions.length > 0 && 
            transactions.filter( currentValue => {
                if(query === ''){
                    return currentValue;
                }else if(
                    currentValue.description.toLowerCase().includes(query.toLowerCase()) ||
                    currentValue.category.toLowerCase().includes(query.toLowerCase()) ||
                    currentValue.amount.toString().includes(query) ||
                    currentValue.date.toLowerCase().includes(query.toLowerCase())
                ){
                    return currentValue
                }
            }).map( transaction => (
                <tr key={transaction.id} style={{
                    marginBottom: '20px'
                }}>
                    <td>{transaction.id}</td>
                    <td>{ transaction.description }</td>
                    <td>{ transaction.category }</td>
                    <td>{ transaction.amount }</td>
                    <td>{ transaction.date }</td>
                </tr>
            ))
        }

            </tbody>
        </table>
        
    </div>
  )
}

export default DisplayTransactions