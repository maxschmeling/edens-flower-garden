"use client";

import Image from "next/image";
import EdensStory from "./components/Home/EdensStory";
import Hero from "./components/Home/Hero";
import Gallery from "./components/Home/Gallery";
import WhatIsTnbc from "./components/Home/WhatIsTnbc";
import CallToAction from "./components/Home/CallToAction";
import { useState } from "react";

export default function Home() {
  const [navHiddenOnMobile, setNavHiddenOnMobile] = useState(true);

  return (
    <>
      <header className="container flex flex-col items-center">
        <div className="flex flex-row items-center mx-4 gap-8 mt-0 pt-0">
          <input className="hidden" type="checkbox" name="" id="" />
          <div
            className="block md:hidden z-10 flex flex-col justify-between gap-1 w-8 h-6 flex-shrink-0"
            onClick={() => setNavHiddenOnMobile(!navHiddenOnMobile)}
          >
            <span className="block h-1 w-full rounded-sm bg-black"></span>
            <span className="block h-1 w-full rounded-sm bg-black"></span>
            <span className="block h-1 w-full rounded-sm bg-black"></span>
          </div>
          <div className="md:pt-10 box-border">
            <Image
              width={760}
              height={113}
              src="/logo.png"
              alt="Eden's Flower Garden Logo"
            />
          </div>
        </div>
        <div className="box-border">
          <nav
            className={` ${
              navHiddenOnMobile ? "hidden" : ""
            } md:block my-4 w-full`}
          >
            <ul className="flex flex-col md:flex-row gap-2 space-between uppercase md:justify-center p-8">
              <li>
                <a className="underline" href="#top">
                  Home
                </a>
              </li>
              <li>
                <a className="underline" href="#eden">
                  Eden’s Story
                </a>
              </li>
              <li>
                <a className="underline" href="#gallery">
                  Gallery
                </a>
              </li>
              <li>
                <a className="underline" href="#tnbc">
                  What is TNBC?
                </a>
              </li>
              <li>
                <a className="underline" href="#donate">
                  Donate
                </a>
              </li>
              <li>
                <a className="underline" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main
        className={`flex min-h-screen flex-col justify-between ${
          !navHiddenOnMobile ? "opacity-20" : ""
        } md:opacity-100`}
      >
        <Hero />
        <EdensStory />
        <Gallery />
        <WhatIsTnbc />
        <CallToAction />
      </main>
      <footer className="text-center pb-10">
        <p>
          &copy; 2024 Eden's Foundation. All rights reserved. Eden's Foundation
          is a 501(c)(3) tax-exempt organization. ID: 13-1788491.
        </p>
      </footer>
    </>
  );
}
