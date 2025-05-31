import { Link } from "react-router"
import { Button } from "../ui/button"
import { House } from 'lucide-react';

const Logo = () => {
  return (
    <Button asChild>
        <Link to="/"><House className="w20 h-20" /></Link>
    </Button>
  )
}
export default Logo