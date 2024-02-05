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
          <div
            className="block md:hidden z-10 flex flex-col justify-between gap-1 w-8 h-6 flex-shrink-0"
            onClick={() => setNavHiddenOnMobile(!navHiddenOnMobile)}
          >
            <span className="block h-1 w-full rounded-sm bg-black"></span>
            <span className="block h-1 w-full rounded-sm bg-black"></span>
            <span className="block h-1 w-full rounded-sm bg-black"></span>
          </div>
          <div className="md:pt-8 box-border">
          <h1>
            <Image
              className="w-[150%]"
              width={438}
              height={65}
              src="/logo.png"
              alt="Eden's Flower Garden. Buy flowers. Fight cancer."
            />
          </h1>
          </div>
        </div>
        <div className="box-border">
          <nav
            className={` ${
              navHiddenOnMobile ? "hidden" : ""
            } md:block my-4 w-full`}
          >
            <ul className="flex flex-col md:flex-row gap-2 xl:gap-6 space-between space-x-6 text-base xl:text-lg 2xl:text-xl tracking-wide uppercase md:justify-center p-2">
              <li>
                <a href="#top">
                  Home
                </a>
              </li>
              <li>
                <a href="#eden">
                  Eden’s Story
                </a>
              </li>
              <li>
                <a href="#gallery">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#tnbc">
                  What is TNBC?
                </a>
              </li>
              <li>
                <a href="#donate">
                  Donate
                </a>
              </li>
              <li>
                <a href="#contact">
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
