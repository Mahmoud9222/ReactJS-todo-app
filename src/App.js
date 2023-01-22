import React, { useState } from "react";
import "./App.css";

export const App = () => {
const [newItem, setNewItem] = useState("");
const [items, setItems] = useState([]);
const [filterText, setFilterText] = useState("");

function addItem() {
if (!newItem) {
alert("Please enter an item.");
return;
}
setItems((oldList) => [...oldList, { id: Date.now(), value: newItem }]);
setNewItem("");
}

function deleteItem(id) {
setItems((oldList) => oldList.filter((item) => item.id !== id));
}

const filteredItems = items.filter((item) =>
item.value.toLowerCase().includes(filterText.toLowerCase())
);

return (
<div className="app">
<h1>My Todo List</h1>
<div className="input-container">
<input
type="text"
placeholder="Add an item..."
value={newItem}
onChange={(e) => setNewItem(e.target.value)}
/>
<button onClick={addItem}>Add</button>
<button onClick={() => setItems([])}>Reset</button>
</div>
<br />
<input
type="text"
placeholder="Filter items..."
value={filterText}
onChange={(e) => setFilterText(e.target.value)}
/>
<ul>
{filteredItems.map((item) => (
<li key={item.id}>
{item.value}
<button onClick={() => deleteItem(item.id)}>Delete</button>
</li>
))}
</ul>
</div>
);
};