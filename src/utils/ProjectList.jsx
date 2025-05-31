import Todo from '@/images/TodoList.png';
import FP from '@/images/FinalProject.png';
import Mini15Puzz from '@/images/MiniProject15Puzz.png';

export const projects = [
    {
      title: "My Final Project",
      description: {
        Tool: [
          "Editor: VSCode",
          "Framework: Laravel (PHP Framework)",
          "Server Sim: MAMP || XAMPP",
          "Database: MySQL",
          "Version Control: Git/GitHub",
        ],
        Library: [
          "TailwindCSS",
          "CKEDITOR 5",
          "DaisyUI",
          "SweetAlert2",
          "FontAwesome",
        ]
      },
      image: FP,
      projectUrl: "https://saboard.chesster.net/",
    },
    {
      title: "15 Puzzle Game",
      description: {
        Tool: [
          "Editor: VSCode",
        ],
        Library: [
          "HTML",
          "CSS",
          "JavaScript",
        ]
      },
      image: Mini15Puzz,
      projectUrl: "https://puzzle-picture-4d45e.web.app/",
    },
    {
      title: "Todo List",
      description: {
        Tools: [
          "React",
          "Vite",
          "Tailwind CSS",
          "lucide-react",
        ],
        Libraries: [
          "Shadcn",
          "Custom utility functions for Todo management (addTodo, deleteTodo, handleEdit, saveEdit)"
        ]
      },
      image: Todo,
      projectUrl: "/todoList",
    },
    
  ];