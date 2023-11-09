import { PricingCards } from "@/components/PricingCards";

const PricingPage = () => {
  return (
    <div className="isolate overflow-hidden bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 -mt-20 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className=" text-4xl font-bold  leading-7 text-indigo-400 mb-7">
            Pricing
          </h1>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-2xl">
            The right price for you,{" "}
            <br className="hidden sm:inline lg:hidden" />
            whoever you are
          </p>
        </div>
        <div className="relative mt-6">
          <p className="mx-auto max-w-2xl text-lg leading-8 text-white/60">
            Were 99% sure we have a plan to match 100 of your needs.
          </p>
          <svg
            viewBox="0 0 1208 1024"
            className="absolute  -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0  "
          >
            <ellipse
              cx={604}
              cy={512}
              rx={604}
              ry={512}
              fill="url(#radial-gradient-pricing)"
            />
            <defs>
              <radialGradient id="radial-gradient-pricing">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="flow-root  pb-24 sm:pb-10">
        <div className="-mt-80">
          <PricingCards redirect={true} />
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
