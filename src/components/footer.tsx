"use client";
import Image from "next/image";
import { Typography, IconButton, Button } from "@material-tailwind/react";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 bg-gray-700 px-8 pt-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:justify-between">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <Image
                src="/image/collabry-logo-color.png"
                alt="Collabry Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <Typography color="white" className="mb-4 font-normal">
              <strong>Address:</strong><br />
              Barbaros, Şebboy Sk. No:4/1 İç Kapı No:1<br />
              34758 Ataşehir/İstanbul
            </Typography>
            <Typography color="white" className="mb-4 font-normal">
              <strong>Contact:</strong><br />
              Email: app@collabry.io
            </Typography>
            <div className="flex items-center gap-2">
              <Typography color="white" className="font-normal">
                Follow us:
              </Typography>
              <a href="https://www.linkedin.com/company/collabrytr/" target="_blank" rel="noopener noreferrer">
                <IconButton variant="text" color="white" size="sm">
                  <i className="fa-brands fa-linkedin text-xl not-italic opacity-75"></i>
                </IconButton>
              </a>
            </div>

          </div>
          <div className="mt-8 w-full md:mt-0 md:w-auto">
            <Typography variant="h6" color="white" className="mb-3">
              Download Niyi5
            </Typography>
            <div className="flex flex-col gap-2">
              <Button
                color="white"
                className="flex items-center justify-center"
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/logo-apple.png"
                  className="-mt-0.5 mr-2 h-6 w-6"
                  alt="ios"
                />
                App Store
              </Button>
              <a href="https://play.google.com/store/apps/details?id=com.collabry.myapp&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
                <Button
                  color="white"
                  className="flex items-center justify-center"
                >
                  <Image
                    width={256}
                    height={256}
                    src="/logos/logo-google.png"
                    className="-mt-0.5 mr-2 h-6 w-6"
                    alt="Google Play"
                  />
                  Google Play
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-gray-700 py-4 md:justify-between">
          <Typography
            color="white"
            className="text-center font-normal opacity-75"
          >
            Copyright © 2025 Collabry Software and Information Inc.
          </Typography>


        </div>
      </div>
    </footer>
  );
}

export default Footer;
