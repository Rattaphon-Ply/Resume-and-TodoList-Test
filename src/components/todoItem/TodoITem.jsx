import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";

const TodoItem = ({
  todo,
  index,
  editIndex,
  editText,
  loading,
  setEditIndex,
  setEditText,
  saveEdit,
  handleEdit,
  deleteTodo,
  todos,
  setTodos,
  setLoading
}) => {
  return (
    <li className="flex items-center justify-between bg-gray-100 p-3 rounded  dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      <div className="flex-1 flex items-center">
        <span className="text-indigo-700 font-bold mx-2">{index + 1}.</span>
        {editIndex === index ? (
          <Input
            className="w-full border rounded px-2 py-1"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
        ) : (
          <span>{todo.text}</span>
        )}
      </div>

      <div className="flex gap-2 ml-4">
        {editIndex === index ? (
          <>
            <Button
              disabled={loading}
              variant="default"
              onClick={() =>
                saveEdit(index, todos, editText, setLoading, setTodos, setEditIndex, setEditText)
              }
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <Loader className="animate-spin h-4 w-4" />
                  Saving...
                </div>
              ) : (
                "Save"
              )}
            </Button>
            <Button variant="outline" onClick={() => setEditIndex(null)}>
              Cancel
            </Button>
          </>
        ) : (
          <>
            <Button
              variant="outline"
              onClick={() => handleEdit(index, todos, setEditIndex, setEditText)}
            >
              Edit
            </Button>
            <Button
              variant="destructive"
              onClick={() => deleteTodo(index, todos, setTodos)}
            >
              Delete
            </Button>
          </>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
