import { PhoneCall } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Github } from 'lucide-react';

const Contact = () => {
  return (
    <div>
        <h2 className="text-3xl text-pink-500">Contact info</h2>
        <ul>
            <li className="my-4 list-none flex items-center space-x-2 group"><PhoneCall className="group-hover:animate-shake" /><span>063-217-3069</span></li>
            <li className='my-4 list-none flex items-center space-x-2'><Mail /><span>rattaphonsiri@gmail.com</span></li>
            <li className="my-4 list-none flex items-center space-x-2">
                <a href="https://github.com/Rattaphon-Ply" target="_blank" rel="noopener noreferrer" className='flex items-center space-x-2'><Github /><span>Rattaphon-Ply</span></a>
            </li>
        </ul>
    </div>
  )
}
export default Contact