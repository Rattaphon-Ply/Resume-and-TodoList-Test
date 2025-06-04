import Me from '@/images/MePic.png';

const PictureMe = () => {
  return (
  <div className="relative w-fit">
  <img
    src={Me}
    className="w-48 object-cover rounded-xl shadow-lg transition duration-300 hover:scale-105"
  />
  <div className="absolute inset-0 rounded-xl pointer-events-none animate-glow-ring z-[-1]"></div>
</div>
  )
}
export default PictureMe