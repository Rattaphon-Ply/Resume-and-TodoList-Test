
export const addTodo = (todos, setTodos, newTodo, setNewTodo) => {
    if (newTodo.trim() === "") {
      alert("Please enter a task before adding.");
      return; // หยุดไม่ให้เพิ่ม
    }
  
    const updatedTodos = [...todos, { text: newTodo, completed: false }];
    setTodos(updatedTodos);
    setNewTodo("");
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };
  

export const deleteTodo = (index, todos, setTodos) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));  // บันทึกใน localStorage
  };

export const handleEdit = (index, todos, setEditIndex, setEditText) => {
    setEditIndex(index);
    setEditText(todos[index].text);
  };

export const saveEdit = async (index, todos, editText, setLoading, setTodos, setEditIndex, setEditText) => {
    setLoading(true); // เริ่มโหลด
  
    await new Promise((r) => setTimeout(r, 2000)); // จำลอง delay
  
    const updatedTodos = [...todos];
    updatedTodos[index].text = editText;
    setTodos(updatedTodos);
    setEditIndex(null);
    setEditText("");
  
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setLoading(false); // เสร็จแล้วหยุดโหลด
  };