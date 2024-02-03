const CtaItem = (props: {
  title: string;
  description: string;
  button: string;
  link: string;
}) => {
  return (
    <div className="bg-accent w-80 text-center p-8 flex flex-col justify-between">
      <h2 className="font-bold text-xxl uppercase">{props.title}</h2>
      <div>
        <p>{props.description}</p>
      </div>
      <div className="box-border mt-4">
        <a
          href={props.link}
          className="box-border p-4 bg-primary text-white uppercase"
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
        title="Buy Flowers. Fight Cancer."
        description="Every time you buy flowers through our site, we donate our full commission to fund research working to find a cure for TNBC."
        button="Buy Flowers"
        link="https://flowers.com"
      />
      <CtaItem
        title="I just want to donate."
        description="Every dollar you donate goes directly to funding research working to find a cure for TNBC."
        button="Donate"
        link="https://donate.com"
      />
      <CtaItem
        title="Email Eden's Foundation."
        description="Have a question? Want to get involved? Email us!"
        button="Email us"
        link="mailto:"
      />
    </section>
  );
}
