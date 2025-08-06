import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Button } from "../ui/button"
import { AlignLeft } from 'lucide-react';
import BookIcon from "./BookIcon";

import { Link } from "react-router";
import { projects } from "@/utils/ProjectList";

const DropdownListMenu = () => { 
  return (
    <DropdownMenu className="">
        <DropdownMenuTrigger asChild>
            <Button variant="outline">
                <AlignLeft />
                <BookIcon />
            </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
            <Link to={'/'}>
                <DropdownMenuItem>Home</DropdownMenuItem>
            </Link>
            {projects.map((item, index) => {
                const isExternal = item.projectUrl.startsWith("http");

                    return (
                        <DropdownMenuItem key={index} className="p-0">
                        {isExternal ? (
                            <a
                            href={item.projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full px-2 py-1 text-sm hover:bg-accent rounded"
                            >
                            {item.title}
                            </a>
                        ) : (
                            <Link
                            to={item.projectUrl}
                            className="w-full px-2 py-1 text-sm hover:bg-accent rounded"
                            >
                            {item.title}
                            </Link>
                        )}
                        </DropdownMenuItem>
                    );
        })}
        </DropdownMenuContent>
    </DropdownMenu>

  )
}
export default DropdownListMenu