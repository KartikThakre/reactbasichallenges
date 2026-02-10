import React from 'react'
import "./DynamicList.css"

const DynamicList = () => {

    const [items, setItems] = React.useState([]);
    const [inputValue, setInputValue] = React.useState(""); 

    const handleAddItem = () => {
        if(inputValue.trim() !== "") {
            const newItem = [...items, { id: Date.now(), text: inputValue.trim() }]
            setItems(newItem);
            setInputValue("");
        }
        console.log(items, inputValue);
    }

    const handleDeleteItem = (id) => {
        const newItems = items.filter(item => item.id !== id);
        console.log(newItems);
        setItems(newItems);
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    
  return (
    <div className="dynamicListContainer">
      <h2>Dynamic List</h2>
     <label htmlFor="input">
        <input type="text" id="input" placeholder="add item" className='inputLebel'  value={inputValue} onChange={handleInputChange}/>
        <button className='addButton' onClick={handleAddItem}>Add Item</button>
     </label>
     <ul>
        {items.map((item) => (
            <li className='inputList' key={item.id}>{item.text}
            <button className='addButton' onClick={() => handleDeleteItem(item.id)}>Delete</button>
            </li>

        ))}
     </ul>
    </div>
  )
}

export default DynamicList