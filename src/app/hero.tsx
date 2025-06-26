"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";


function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      <header className="grid !min-h-[49rem] bg-gray-900 px-8">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1">
            <Typography variant="h1" color="white" className="mb-4">
              Niyi5 - Rank & <br /> Discover the Best!
            </Typography>
            <Typography
              variant="lead"
              className="mb-7 !text-white md:pr-16 xl:pr-28"
            >
              A fun and interactive platform where users rank items in various categories, 
              bringing together community preferences to determine the top 5 choices. 
              From movies to books, restaurants to tech products—rank your favorites!
            </Typography>
            <Typography className="mb-4" color="white" variant="h6">
              Download & Start Ranking
            </Typography>
            <div className="flex flex-col gap-3 md:mb-2 md:w-10/12 md:flex-row">
              <a href="https://app.niyi5.com" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  color="white"
                  className="w-full flex justify-center items-center gap-3 px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors"
                >
                  <Image
                    width={24}
                    height={24}
                    src="/logos/logo-apple.png"
                    alt="Apple logo"
                    className="w-6 h-6"
                  />
                  <div className="flex flex-col items-start text-left">
                    <span className="text-xs text-gray-300">Download on the</span>
                    <span className="text-lg font-semibold">App Store</span>
                  </div>
                </Button>
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.collabry.myapp&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  color="white"
                  className="w-full flex justify-center items-center gap-3 px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors"
                >
                  <Image
                    width={24}
                    height={24}
                    src="/logos/logo-google.png"
                    alt="Google Play logo"
                    className="w-6 h-6"
                  />
                  <div className="flex flex-col items-start text-left">
                    <span className="text-xs text-gray-300">Get it on</span>
                    <span className="text-lg font-semibold">Google Play</span>
                  </div>
                </Button>
              </a>
            </div>
          </div>
                     <div className="col-span-1 my-20 h-full max-h-[35rem] -translate-y-40 md:max-h-[42rem] lg:my-0 lg:ml-auto lg:max-h-[48rem] lg:-translate-y-8">
              <Image
                width={560}
                height={688}
                src="/image/1.png"
                alt="Niyi5 Mobile App"
                className="w-full h-full object-contain"
                style={{
                  filter: 'brightness(0.95)',
                  mixBlendMode: 'multiply',
                  backgroundColor: 'transparent'
                }}
              />
            </div>
        </div>
      </header>
      <div className="mx-8 lg:mx-16 -mt-24 rounded-xl bg-white p-5 md:p-14 shadow-md">
        <div>
          <Typography variant="h3" color="blue-gray" className="mb-3">
            Discover the Best with Community Power
          </Typography>
          <Typography
            variant="paragraph"
            className="font-normal !text-gray-500 lg:w-5/12"
          >
            Join a vibrant community where everyone's opinion matters! Rank your favorites, 
            discover new gems, and see what the community loves most. Whether it's movies, 
            books, restaurants, or tech gadgets - find the top 5 in every category.
          </Typography>
        </div>
      </div>
    </div>
  );
}
export default Hero;
