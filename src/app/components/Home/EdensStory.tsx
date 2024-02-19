import Image from "next/image";

export default function EdensStory() {
  return (
    <section className="py-4 text-white" id="eden">
      <div className="bg-primary">
        <div className="flex flex-row content py-8">
          <div className="ml-4 md:ml-0 w-full md:w-2/3 pr-4 md:pr-4 lg:pr-6 text-lg">
            <h2 className="text-4xl font-bold mb-4">Eden's Story</h2>
            <img
              className="md:hidden border-2 border-white w-[200px] float-right ml-2 mb-2"
              width={232}
              height={309}
              src="edens-story.jpg"
              alt="Eden's story"
            />
            <p className="2xl:text-xl mb-4">
              Eden's Flower Garden was started by Nate, Jake, and Evan in memory of their mom, Eden,
              who lost her battle with metastatic breast cancer in 2023. More than anything else,
              Eden <span className="whitespace-nowrap">loved flowers.</span>
            </p>
            <p className="2xl:text-xl mb-4">
              We are dedicated to helping end Triple Negative Breast Cancer (TNBC) by selling flowers
              worldwide and raising funds for cancer research. Our goal is to fund a cure for TNBC
              while bringing hope and happiness to patients <span className="whitespace-nowrap">through
              flowers.</span>
            </p>
            <p className="2xl:text-xl mb-4">
              Support Eden's Flower Garden by purchasing flowers via our <a className="underline" href="https://www.floristone.com/florist-one-affiliate-program.cfm" target="FloristOne.com">Florist One affiliate link</a>, by spreading awareness about TNBC, and by <a className="underline" href="https://support.cedars-sinai.edu/fundraiser/4801308" target="cedars-sinai.edu">making
              donations to Eden's Foundation</a>. All donations made to Eden's Foundation go towards
              funding more research for TNBC and helping us find a cure. With your help, Eden's
              Foundation has raised more than $60,000 to <span className="whitespace-nowrap">fight TNBC.</span>
            </p>
            <p className="2xl:text-xl mb-4">
              Join us in funding a cure for triple negative breast cancer and brightening the lives of
              patients <span className="whitespace-nowrap">with flowers.</span>
            </p>
            <p className="2xl:text-xl mb-4">
              Together, we can make <span className="whitespace-nowrap">a difference.</span>
            </p>
          </div>
          <div className="hidden md:block w-1/3">
            <img
              className="border-2 border-white w-full object-cover"
              width={2320}
              height={3088}
              src="edens-story.jpg"
              alt="Eden's story"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
