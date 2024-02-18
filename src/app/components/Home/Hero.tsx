import Image from "next/image";

export default function Hero() {
  return (
    <section>
      <div className="container-fluid content mb-6 bg-accent">
        <div className="md:flex">
          <div className="w-2/3">
            <Image
              src="/butterfly.jpg"
              alt="Orange Flower With Butterfly"
              className="w-full object-cover"
              width={2144}
              height={1424}
            />
          </div>
          <div className="flex flex-col justify-around lg:p-8 xl:p-6 2xl:py-12 text-center w-1/3">
            <h2 className="caps">Buy Flowers.<br />Fight Cancer.</h2>
            <p className="lg:text-lg xl:text-base 2xl:text-xl md:p-2 xl:px-4 md:mx-auto md:mb-4">
              Every time you buy flowers through our site, we donate our full
              commission to fund research working to find a cure for TNBC.
            </p>
            <div className="mb-4">
              <a
                href="https://www.floristone.com/florist-one-affiliate-program.cfm"
                className="bg-primary text-white uppercase 2xl:font-bold 2xl:text-lg p-4"
              >
                Buy Flowers
              </a>
            </div>
          </div>
        </div>
      </div>
   </section>
  );
}
