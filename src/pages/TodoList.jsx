import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { addTodo, deleteTodo, handleEdit, saveEdit } from "@/utils/ToolTodo";
import TodoItem from "@/components/todoItem/TodoITem";


const TodoList = () => {

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  


  // ใช้ useEffect เพื่อโหลดข้อมูลจาก localStorage เมื่อเริ่มต้น
    useEffect(() => {
      const storedTodos = JSON.parse(localStorage.getItem("todos"));
      if (storedTodos) {
        setTodos(storedTodos);
      }
    }, []);

    const filteredTodos = todos.filter(todo =>
      todo.text.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className='min-h-screen bg-background text-foreground transition-colors duration-300 animate-fade-in'>
      <div className="border p-8 rounded-md max-w-2xl mx-auto mt-20 text-white">

        <h1 className="capitalize text-2xl font-extrabold mb-4">Todo List</h1>

        <div className="relative w-full flex gap-4 mt-4">
          <div className="relative flex-[3]">
            <Input 
              className="w-full pr-10"
              type="text" 
              value={newTodo} 
              onChange={(e) => setNewTodo(e.target.value)} 
              placeholder="Add a new task"
              maxLength={50} // จำกัดจำนวนตัวอักษรที่พิมพ์ได้
            />
            <button
              onClick={() => setNewTodo("")}
              className={`
                absolute right-2 top-1/2 transform -translate-y-1/2
                text-gray-500 hover:text-red-500
                transition duration-300 ease-in-out
                ${newTodo ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'}
              `} // เมื่อมีข้อความบนช่อง Input จะมีปุ้ม x ขึ้นมา
            >
              ✕
            </button>
          </div>
          

          <Button className="flex-[1]" onClick={() => addTodo(todos, setTodos, newTodo, setNewTodo)}>Add</Button>
        </div>
        
        
        <div className="relative w-full flex gap-4 mt-4">
          <Input
            type="text"
            placeholder="🔍 Search tasks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`pr-10 ${searchTerm.length > 50 ? 'border-red-500' : ''}`} // ถ้าตัวอักษรเกิน 50 จะเปลี่ยนกรอบเป็นสีแดง
            maxLength={50} // จำกัดจำนวนตัวอักษรที่พิมพ์ได้
          />
          
          <button
            onClick={() => setSearchTerm("")}
            className={`
              absolute right-2 top-1/2 transform -translate-y-1/2
              text-gray-500 hover:text-red-500
              transition duration-300 ease-in-out
              ${searchTerm ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'}
            `} // เมื่อมีข้อความบนช่อง Input จะมีปุ้ม x ขึ้นมา
          >
            ✕
          </button>
        </div>
        <ul className="mt-6 space-y-2">
          {filteredTodos.map((todo) => {
            const trueIndex = todos.indexOf(todo);
            return (
              <TodoItem
              key={trueIndex}
              todo={todo}
              index={trueIndex}
              editIndex={editIndex}
              editText={editText}
              loading={loading}
              setEditIndex={setEditIndex}
              setEditText={setEditText}
              saveEdit={saveEdit}
              handleEdit={handleEdit}
              deleteTodo={deleteTodo}
              todos={todos}
              setTodos={setTodos}
              setLoading={setLoading}
              />
            )
          })}
        </ul>

      </div>  
    </div>
    
  )
}
export default TodoList