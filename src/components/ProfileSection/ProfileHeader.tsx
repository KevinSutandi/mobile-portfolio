import Image from 'next/image';
import ProfilePic from '@/assets/Profile Picture.jpg';

export default function ProfileHeader() {
  return (
    <>
      <Image
        className='inline-block h-24 w-24 justify-center rounded-full ring-2 ring-white md:h-32 md:w-32'
        src={ProfilePic}
        alt='Header Image'
        placeholder='blur'
      />
      <h1 className='text-2xl font-medium text-black md:text-4xl dark:text-gray-200 transistion-all duration-300'>
        Hi, I&apos;m{' '}
        <span className='text-blue-500 font-bold dark:text-blue-400 transition-all duration-300'>
          Kevin
        </span>
      </h1>
    </>
  );
}
