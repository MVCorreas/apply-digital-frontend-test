import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-700 text-white py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <Link href="/" className="flex items-center">
          <Image 
            src="/ad-logo-transparent.png" 
            alt="GameStore Logo" 
            width={150} 
            height={50}
            className="filter brightness-125 grayscale opacity-80 hover:brightness-100 hover:grayscale-0 transition-all duration-300"
          />
        </Link>
      </div>
    </footer>
  )
}