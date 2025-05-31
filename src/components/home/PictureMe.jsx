import Me from '@/images/MePic.png';

const PictureMe = () => {
  return (
    <div className=''>
        <img src={Me} className='w-48 object-cover rounded-xl shadow-lg filter brightness transition hover:scale-105 duration-300'  />
    </div>
  )
}
export default PictureMe