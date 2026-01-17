import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-[#0D1B2A] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-gray-700 dark:text-gray-300 text-center flex items-center gap-2">
            Made by Gunaganti Spandana
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Gunaganti Spandana. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
