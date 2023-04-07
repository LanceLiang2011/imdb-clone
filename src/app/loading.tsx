import Image from 'next/image';
import spinner from '../../public/Spinner.svg';
export default function loading() {
  return (
    <div className='flex justify-center'>
      <Image className='h-96' src={spinner} alt='loading...' />
    </div>
  );
}
