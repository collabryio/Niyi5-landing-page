"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

export function MobileConvenience() {
  return (
    <section className="px-8 py-40">
      <div className="container mx-auto grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <Image
          width={256}
          height={256}
          src="/image/2.png"
          alt="Niyi5 Mobile Experience"
          className="mx-auto w-2/3 md:w-full"
        />
        <div>
          <Typography variant="h3" color="blue-gray" className="mb-3">
            Rank & Discover On-the-Go
          </Typography>
          <Typography className="mb-5 font-normal !text-gray-500">
            Take the fun of ranking everywhere! Whether you&apos;re at a coffee shop 
            thinking about your favorite books or at home deciding what movie to watch, 
            Niyi5 is always at your fingertips.
          </Typography>
          <Typography className="mb-5 font-normal !text-gray-500">
            <strong>Quick Rankings:</strong> Easily rank your favorites with our 
            intuitive mobile interface. Swipe, tap, and discover!
          </Typography>
          <Typography className="mb-5 font-normal !text-gray-500">
            <strong>Community Insights:</strong> See real-time community rankings 
            and discover what&apos;s trending in your favorite categories.
          </Typography>
          <Typography className="font-normal !text-gray-500">
            <strong>Personalized Discovery:</strong> Get recommendations based on 
            your ranking patterns and find your next favorite thing!
          </Typography>
        </div>
      </div>
    </section>
  );
}

export default MobileConvenience;
