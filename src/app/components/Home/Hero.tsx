export default function Hero() {
  return (
    <section>
      <div className="container container-fluid my-8 bg-accent">
        <div className="lg:flex">
          <div className="lg:shrink-0">
            <img
              src="https://place-hold.it/750x450"
              alt="hero"
              className="w-full"
            />
          </div>
          <div className="flex flex-col justify-between p-8 text-center">
            <h1 className="font-bold uppercase">Buy Flowers. Fight Cancer.</h1>
            <p>
              Every time you buy flowers through our site, we donate our full
              commission to fund research working to find a cure for TNBC.
            </p>
            <div>
              <a
                href="https://flowers.com"
                className="bg-primary text-white p-4"
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
