import Todo from "@/images/TodoList.png";
import FP from "@/images/FinalProject.png";
import Ecom from "@/images/Ecom.png";
import Mini15Puzz from "@/images/MiniProject15Puzz.png";
import booking from "@/images/Booking-System.png";
import inventory from "@/images/Inventory-Management-System.png";

export const projects = [
  {
    title: "Hotel Booking System",
    category: "Full-Stack Development",
    overview:
      "A hotel booking application that allows users to search for rooms, check availability, and manage reservations, with administrative features for managing rooms and bookings.",
    features: [
      "Room Search & Availability Checking",
      "Room Details & Booking Management",
      "Room CRUD Operations (Admin)",
      "Booking Management (User & Admin)",
      "JWT Authentication",
      "Amenity Management",
    ],
    techStack: {
      Frontend: [
        "React",
        "Vite",
        "Tailwind CSS",
        "ShadCN UI",
        "Zustand",
        "React Router",
        "Axios",
      ],
      Backend: ["Node.js", "Express.js", "Prisma ORM", "JWT", "BcryptJS"],
      Database: ["Supabase"],
    },
    image: booking,
    projectUrl: "https://github.com/Rattaphon-Ply/Hotel-Booking-System",
  },

  {
    title: "Workshop Ecommerce",
    category: "Full-Stack Development",
    overview:
      "A responsive e-commerce web application featuring user authentication, image uploads, form validation, and Stripe test payment integration.",
    features: [
      "User Registration & Login",
      "JWT Authentication & Password Security",
      "Cloudinary Image Upload",
      "Stripe Payment Integration (Test Mode)",
      "Form Validation with React Hook Form & Zod",
      "Password Strength Validation",
    ],
    techStack: {
      Frontend: [
        "React",
        "Vite",
        "Tailwind CSS",
        "ShadCN UI",
        "Zustand",
        "React Router",
        "React Hook Form",
        "Zod",
      ],
      Backend: [
        "Node.js",
        "Express.js",
        "Prisma ORM",
        "Cloudinary",
        "JWT",
        "BcryptJS",
        "Stripe",
      ],
      Database: ["Supabase"],
    },
    image: Ecom,
    projectUrl: "https://github.com/Rattaphon-Ply/WorkShop-Ecommerce",
  },

  {
    title: "Inventory Management System",
    category: "Python Desktop Application",

    overview:
      "A Python-based inventory management application supporting both Graphical User Interface (GUI) and Command-Line Interface (CLI). The system allows users to manage products, control stock levels, track inventory transactions, and generate reports using XML file storage.",

    features: [
      "Product Management (Create, Read, Update, Delete)",
      "Stock In / Stock Out Management",
      "Product Search, Sorting & Advanced Filtering",
      "Transaction History & Tracking",
      "Inventory & Category Reports",
      "Input Validation",
      "XML-based Data Storage",
      "Dual Interface: GUI & CLI",
    ],

    techStack: {
      Language: ["Python 3.11+"],
      GUI: ["Tkinter", "ttk"],
      CLI: ["Python CLI"],
      Data_Storage: ["XML", "ElementTree"],
      Concepts: [
        "CRUD Operations",
        "Data Validation",
        "Modular Architecture",
        "Business Logic Separation",
      ],
    },

    image: inventory,
    projectUrl: "https://github.com/Rattaphon-Ply/Inventory-Management-System",
  },

  {
    title: "Web Application Answering Questions Using a FAQs Knowledge-based System",
    category: "Web Application",
    overview: "A web development project built using Laravel and MySQL.",
    features: [],
    techStack: {
      Backend: ["PHP", "Laravel"],
      Database: ["MySQL"],
      Frontend: [
        "Tailwind CSS",
        "DaisyUI",
        "CKEditor 5",
        "SweetAlert2",
        "Font Awesome",
      ],
      Tools: ["Git", "GitHub", "VS Code"],
    },
    image: FP,
    projectUrl: "https://saboard.chesster.net/",
  },

  {
    title: "15 Puzzle Game",
    category: "Web Game",
    overview:
      "A browser-based picture puzzle game developed using vanilla JavaScript.",
    features: ["Interactive Picture Puzzle", "Game Timer", "Move Counter"],
    techStack: {
      Frontend: ["HTML", "CSS", "JavaScript"],
    },
    image: Mini15Puzz,
    projectUrl: "https://puzzle-picture-4d45e.web.app/",
  },

  {
    title: "Todo List",
    category: "Frontend Development",
    overview:
      "A responsive task management application built with React and Vite.",
    features: ["Add & Delete Tasks", "Edit & Save Tasks", "Task Management"],
    techStack: {
      Frontend: ["React", "Vite", "Tailwind CSS", "ShadCN UI", "Lucide React"],
    },
    image: Todo,
    projectUrl: "/todoList",
  },
];
