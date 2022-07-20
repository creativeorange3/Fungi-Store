import Image from 'next/image';
import { useTheme } from 'next-themes';

import images from '../assets';
import { Button } from '.';

const FooterLinks = ({ heading, items }) => (
  <div className="flex-1 justify-start items-start">
    <h3 className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl mb-10">{heading}</h3>
    {items.map((item, i) => (
      <p key={i} className="font-poppins dark:text-white text-nft-black-1 font-normal text-base cursor-pointer dark:hover:text-nft-gray-1 hover:text-nft-black-1 my-3">{item}</p>
    ))}
  </div>
);

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className="flexCenter flex-col dark:border-nft-black-1 border-nft-gray-1 sm:py-8 py-16">
      <div className="flexCenter w-full mt-5 border-t dark:border-nft-black-1 border-nft-gray-1 sm:px-4 px-16">
        <div className="flexBetween flex-row w-full minmd:w-4/5 sm:flex-col mt-7">
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-base">Fungi Forrest. All Rights Reserved.</p>
          <div className="flex flex-row sm:mt-4">
            <div className="mx-2 cursor-pointer space-x-4">
              <a className="px-4" href="https://twitter.com/fungiforrest"> <Image src={images.telegram} objectFit="contain" width={24} height={24} alt="social" className={theme === 'light' ? 'filter invert' : ''} /></a>

              <a href="https://t.me/fungiforrest"><Image src={images.twitter} objectFit="contain" width={24} height={24} alt="social" className={theme === 'light' ? 'filter invert mx-2' : 'mx-2'} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
