import Approutes from "./routes/Approutes"
import '@/styles/globals.css';

const App = () => {
  return (
    <div className="bg-[#F8F9FA] dark:bg-[hsl(200,83%,7%)] text-black dark:text-white transition-colors duration-300">
      <Approutes />
    </div>
  )
}
export default App