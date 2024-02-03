import Image from "next/image";

export default function EdensStory() {
  return (
    <section className="py-4 text-white">
      <div className="bg-primary">
        <div className="container flex flex-row py-8">
          <div className="mx-4">
            <h1 className="text-xl font-bold">Eden's Story</h1>
            <p>
              Eden's Flower Garden was started by Nate, Jake, and Evan in memory
              of their mom, Eden, who lost her battle with metastatic breast
              cancer in 2023. More than anything else, Eden loved flowers.
            </p>
            <p>
              We are dedicated to helping end Triple NEgative Breast Cancer
              (TNBC) by selling flowers worldwide and raising funds for cancer
              research. Our goal is to fund a cure for TNBC while bringing hope
              and happiness to patients through flowers.
            </p>
            <p>
              Support Eden's Flower Garden by purchasing flowers via our
              1-800-Flowers affiliate link, by spreading awareness about TNBC,
              and by making donations to Eden's Foundation. All donations made
              to Eden's Foundation go towards funding more research for TNBC and
              helping us find a cure. With your help, Eden's Foundation has
              raised $1,234 to fight TNBC.
            </p>
            <p>
              Join us in funding a cure for triple negative breast cancer and
              brightening the lives of patients with flowers.
            </p>
            <p>Together, we can make a difference.</p>
          </div>
          <img
            className="hidden md:block"
            width={300}
            height={500}
            src="https://place-hold.it/300x500"
            alt="Eden's Flower Garden"
          />
        </div>
      </div>
    </section>
  );
}
