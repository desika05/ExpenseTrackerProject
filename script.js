﻿/* style.css */
body { 
    font-family: Arial, sans-serif; 
    margin: 20px; 
} 
  
.container { 
    max-width: 800px; 
    margin: 0 auto; 
    background-color: #f9f9f9; 
    padding: 20px; 
    border-radius: 8px; 
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
} 
  
h1 { 
    text-align: center; 
    margin-bottom: 20px; 
} 
  
form { 
    display: flex; 
    justify-content: center; 
    margin-bottom: 20px; 
} 
  
input[type="text"], 
input[type="number"] { 
    padding: 10px; 
    border: 1px solid #ccc; 
    border-radius: 4px; 
    outline: none; 
} 
  
input[type="text"]::placeholder, 
input[type="number"]::placeholder { 
    color: #999; 
} 
  
button { 
    padding: 10px 20px; 
    background-color: #4caf50; 
    color: white; 
    border: none; 
    border-radius: 4px; 
    cursor: pointer; 
} 
  
button:hover { 
    background-color: #45a049; 
} 
  
.expense-table { 
    border: 1px solid #ddd; 
    border-radius: 8px; 
    overflow: hidden; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
} 
  
table { 
    width: 100%; 
    border-collapse: collapse; 
} 
  
thead th { 
    background-color: #f2f2f2; 
    padding: 10px; 
    text-align: left; 
} 
  
tbody td { 
    padding: 10px; 
    border-top: 1px solid #ddd; 
} 
  
.delete-btn { 
    color: red; 
    cursor: pointer; 
} 
  
.total-amount { 
    padding: 10px; 
    text-align: right; 
    background-color: #f2f2f2; 
}