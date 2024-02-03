import Image from "next/image";
import EdensStory from "./components/Home/EdensStory";
import Hero from "./components/Home/Hero";
import Gallery from "./components/Home/Gallery";
import WhatIsTnbc from "./components/Home/WhatIsTnbc";
import CallToAction from "./components/Home/CallToAction";

export default function Home() {
  return (
    <>
      <header className="container flex flex-col items-center gap-8">
        <nav>
          <div className="h-20 flex flex-row items-center mx-4 gap-8 mt-0 pt-0">
            <input className="hidden" type="checkbox" name="" id="" />
            <div className="block z-10 flex flex-col justify-between gap-1 w-8 h-6 flex-shrink-0">
              <span className="block h-1 w-full rounded-sm bg-black"></span>
              <span className="block h-1 w-full rounded-sm bg-black"></span>
              <span className="block h-1 w-full rounded-sm bg-black"></span>
            </div>
            <div className="logo">
              <Image
                width={760}
                height={113}
                src="/logo.png"
                alt="Eden's Flower Garden Logo"
              />
            </div>
            <ul className="list-none hidden">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Eden's Story</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
              <li>
                <a href="#">What is TNBC?</a>
              </li>
              <li>
                <a href="#">Donate</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        {/* 
        <nav className="flex flex-row space-between space-x-4 uppercase">
          <a href="#top">Home</a>
          <a href="#eden">Eden’s Story</a>
          <a href="#gallery">Gallery</a>
          <a href="#tnbc">What is TNBC?</a>
          <a href="#donate">Donate</a>
          <a href="#contact">Contact</a>
        </nav> */}
      </header>
      <main className="flex min-h-screen flex-col justify-between">
        <Hero />
        <EdensStory />
        <Gallery />
        <WhatIsTnbc />
        <CallToAction />
      </main>
      <footer className="text-center">
        <p>
          &copy; 2024 Eden's Foundation. All rights reserved. Eden's Foundation
          is a 501(c)(3) tax-exempt organization. ID: 13-1788491.
        </p>
      </footer>
    </>
  );
}
