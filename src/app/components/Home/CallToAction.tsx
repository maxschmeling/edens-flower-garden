const CtaItem = (props: {
  title: React.ReactElement | string;
  id: string;
  description: string;
  button: string;
  link: string;
}) => {
  return (
    <div className="bg-accent w-80 text-center p-8 flex flex-col justify-between" id={props.id}>
      <h2 className="caps">{props.title}</h2>
      <div className="my-4">
        <p>{props.description}</p>
      </div>
      <div className="box-border mt-4 mb-4">
        <a
          href={props.link}
          className="bg-primary text-white uppercase 2xl:font-bold 2xl:text-lg p-4"
        >
          {props.button}
        </a>
      </div>
    </div>
  );
};

export default function CallToAction() {
  return (
    <section className="container flex flex-row gap-4 py-12 justify-center flex-wrap">
      <CtaItem
        title={<>Buy Flowers. <span className="whitespace-nowrap">Fight Cancer.</span></>}
        id="buy"
        description="Every time you buy flowers through our site, we donate our full commission to fund research working to find a cure for TNBC."
        button="Buy Flowers"
        link="http://www.floristone.com/index.cfm?source_id=aff&AffiliateID=2024026359"
      />
      <CtaItem
        title={<>I just want <span className="whitespace-nowrap">to donate.</span></>}
        id="donate"
        description="Every dollar you donate goes directly to funding research working to find a cure for TNBC."
        button="Donate"
        link="https://support.cedars-sinai.edu/fundraiser/4801308"
      />
      <CtaItem
        title="Email Eden's Foundation."
        id="contact"
        description="Have a question? Want to get involved? Email us!"
        button="Email us"
        link="mailto:hello@edensflowergarden.com"
      />
    </section>
  );
}
