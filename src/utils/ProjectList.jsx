import Todo from '@/images/TodoList.png';
import FP from '@/images/FinalProject.png';
import Ecom from '@/images/Ecom.png'
import Mini15Puzz from '@/images/MiniProject15Puzz.png';
import booking from '@/images/Booking-System.png';

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
      title: "Workshop Ecommerce",
      description: {
        Frontend : [
          "Vite + React",
          "Tailwind CSS",
          "ShadCN UI",
          "React Router DOM",
          "Zustand",
          "Axios",
          "React Toastify",
          "Lucide React",
          "React Hook Form",
          "Zod",
          "Zxcvbn",
          "Material UI",
          "React Image File Resizer",
        ],
        Backend : [
          "Node.js + Express.js",
          "Prisma ORM",
          "Cloudinary",
          "Morgan",
          "CORS",
          "Nodemon",
          "BcryptJS",
          "JSON Web Token (JWT)",
          "Stripe (Test Mode)",
        ],
      },
      image: Ecom,
      projectUrl: "https://github.com/Rattaphon-Ply/WorkShop-Ecommerce",
    },
    {
      title: "Hotel Booking System",
      description: {
        Frontend : [
          "Vite + React",
          "Tailwind CSS",
          "ShadCN UI",
          "React Router DOM",
          "Zustand",
          "Axios",
          "Lucide React",
          "React Hook Form",
          "Zod",
          "Material UI",
          "Motion Dev",
          "sonner",
        ],
        Backend : [
          "Node.js + Express.js",
          "Prisma ORM",
          "Morgan",
          "CORS",
          "Nodemon",
          "BcryptJS",
          "JSON Web Token (JWT)",
        ],
      },
      image: booking,
      projectUrl: "https://github.com/Rattaphon-Ply/Hotel-Booking-System",
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

  ];