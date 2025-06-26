"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

import {
  CursorArrowRaysIcon,
  HeartIcon,
  LightBulbIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "../components/feature-card";

const FEATURES = [
  {
    icon: HeartIcon,
    title: "Rank Your Favorites",
    children:
      "Choose the items you love and create your own rankings. Express your preferences across movies, books, restaurants, tech products, and more!",
  },
  {
    icon: CursorArrowRaysIcon,
    title: "Community Rankings",
    children:
      "Explore the rankings of other users and discover their top picks. See how your taste compares with the community preferences.",
  },
  {
    icon: LockClosedIcon,
    title: "Discover Top 5",
    children:
      "Find out the top 5 most preferred items in each category based on community votes. Let the wisdom of the crowd guide your choices.",
  },
  {
    icon: LightBulbIcon,
    title: "Find New Ideas",
    children:
      "Wondering what movie to watch or which meal to try? Niyi5 helps you discover new gems through community recommendations and rankings.",
  },
];

export function Features() {
  return (
    <section className="py-28 px-4">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          Why Choose Niyi5?
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Fun & Interactive Features
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-500 lg:w-11/12 lg:px-8 "
        >
          A community-driven platform where everyone&apos;s opinion matters. 
          Rank your favorites, discover new choices, and have fun with rankings and discussions. 
          Compare your preferences with the most popular choices in the community!
        </Typography>
      </div>
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 gap-y-12 md:grid-cols-2">
        {FEATURES.map((props, idx) => (
          <FeatureCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
export default Features;
