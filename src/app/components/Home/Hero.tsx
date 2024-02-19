import Image from "next/image";

export default function Hero() {
  return (
    <section>
      <div className="container-fluid content mb-6 bg-accent">
        <div className="flex flex-col sm:flex-row min-h-[330px]">
          <div className="sm:w-2/3 h-64 mb-4 sm:mb-0 sm:h-auto">
            <Image
              src="/butterfly.jpg"
              alt="Orange Flower With Butterfly"
              className="sm:w-full h-full object-cover object-top"
              width={2144}
              height={1424}
            />
          </div>
          <div className="flex flex-col justify-around lg:p-8 xl:p-6 2xl:py-12 text-center w-full sm:w-1/3">
            <h2 className="caps">Buy Flowers. <span className="whitespace-nowrap">Fight Cancer.</span></h2>
            <p className="lg:text-lg xl:text-base 2xl:text-xl p-2 xl:px-4 md:mx-auto md:mb-4">
              Every time you buy flowers through our site, we donate our full
              commission to fund research working to find a cure for TNBC.
            </p>
            <div className="mt-5 mb-8 sm:mb-4 sm:mt-0">
              <a
                href="http://www.floristone.com/index.cfm?source_id=aff&AffiliateID=2024026359"
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
