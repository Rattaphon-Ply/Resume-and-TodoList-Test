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
import { links } from "@/utils/links";
import { Link } from "react-router";

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
            {links.map((item, index) => {
                const isExternal = item.href.startsWith("http");

                    return (
                        <DropdownMenuItem key={index} className="p-0">
                        {isExternal ? (
                            <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full px-2 py-1 text-sm hover:bg-accent rounded"
                            >
                            {item.label}
                            </a>
                        ) : (
                            <Link
                            to={item.href}
                            className="w-full px-2 py-1 text-sm hover:bg-accent rounded"
                            >
                            {item.label}
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