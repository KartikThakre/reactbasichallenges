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



//?🎯 So When Can We Use New Variable?

//?You can use a new variable when:

//?✔ You are not worried about async updates
//?✔ It's a simple, single update
//?✔ No rapid multiple updates happening

//?For small apps → your version works fine.
//?For real-world apps → functional update is safer.



//🔥 Why Safer?

// Imagine React batches updates (which it does).

// If two handleAddItem() calls happen very fast, React might not update items immediately.

// Then this:

// const newItem = [...items, ...]


// could use old items value 😬

// ✅ Better Version (Recommended)
// setItems(prevItems => [
//   ...prevItems,
//   { id: Date.now(), text: inputValue.trim() }
// ]);


// Now React guarantees you're using the latest state.