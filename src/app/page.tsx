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
      <header className="container flex flex-col items-center" id="top">
        <div className="flex flex-row items-center mx-4 gap-8 mt-0 pt-0 pb-4">
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
              className=""
              width={438}
              height={65}
              src="/logo.png"
              alt="Eden's Flower Garden. Buy flowers. Fight cancer."
            />
          </h1>
          </div>
        </div>
        <div className="box-border self-start md:self-auto ml-16 md:ml-0">
          <nav
            className={` ${
              navHiddenOnMobile ? "hidden" : ""
            } md:block my-4 w-full`}
          >
            <ul id="menu" className="flex space-between">
              <li>
                <a href="#top" onClick={() => setNavHiddenOnMobile(true)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#eden" onClick={() => setNavHiddenOnMobile(true)}>
                  Eden’s Story
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={() => setNavHiddenOnMobile(true)}>
                  Gallery
                </a>
              </li>
              <li>
                <a href="#tnbc" onClick={() => setNavHiddenOnMobile(true)}>
                  What is TNBC?
                </a>
              </li>
              <li>
                <a href="#donate" onClick={() => setNavHiddenOnMobile(true)}>
                  Donate
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setNavHiddenOnMobile(true)}>
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
        {/* <p className="float-right hidden max-sm:block">MOB</p><p className="float-right hidden sm:max-md:block">SM</p><p className="float-right hidden md:max-lg:block">MD</p><p className="float-right hidden lg:max-xl:block">LG</p><p className="float-right hidden xl:max-2xl:block">XL</p><p className="float-right hidden 2xl:block">2XL</p> */}
        <EdensStory />
        <Gallery />
        <WhatIsTnbc />
        <CallToAction />
      </main>
      {/* <p className="float-right hidden max-sm:block">MOB</p><p className="float-right hidden sm:max-md:block">SM</p><p className="float-right hidden md:max-lg:block">MD</p><p className="float-right hidden lg:max-xl:block">LG</p><p className="float-right hidden xl:max-2xl:block">XL</p><p className="float-right hidden 2xl:block">2XL</p> */}
      <footer className="text-center pb-10">
        <p>
          &copy; 2024 Eden's Foundation. All rights reserved. {/* Eden's Foundation is a 501(c)(3) tax-exempt organization. ID: 13-1788491. */}
        </p>
      </footer>
    </>
  );
}
