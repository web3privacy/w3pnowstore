import { GITHUB_LINK, ONCHAINKIT_LINK } from 'src/links';
import { ExternalLinkSvg } from 'src/svg/ExternalLinkSvg';

export default function OnchainStoreSummary() {
  return (
    <div className="flex flex-col justify-start border-gray-200 border-b p-4 py-8 pb-22 lg:w-1/3 md:border-r md:border-b-0 md:py-4 lg:border-r lg:p-6 lg:pb-22">
      <div className="space-y-4 text-left">
        <h2
          className="font-bold text-3xl leading-tight"
          style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontWeight: 700,
            fontStretch: 'condensed',
          }}
        >
          Cypherpunk style for digital freedom fighters.
        </h2>
        <p className="text-sm leading-relaxed">
        From privacy-preserving hackathons to Web3 research labs, our merch tells the story of a global movement that's building a future where digital freedom isn't just a dream but wearable proof that you're part of the resistance against mass surveillance and centralized control.
        </p>
        <p className="text-sm leading-relaxed">
         All products are minted on-chain and can be purchased with USDC or any other supported cryptocurrency.
        </p>
        <div className="flex flex-col pt-6">
          <p className="pt-2 pb-2 font-bold text-sm leading-relaxed">
            OWN YOUR PRIVACY
          </p>
          <a
            href={GITHUB_LINK}
            className="flex cursor-pointer items-center"
            target="_blank"
            rel="noreferrer"
          >
            <p className="text-sm leading-relaxed">Web3Privacy Now</p>
            <span className="pl-1">
              <ExternalLinkSvg />
            </span>
          </a>
          <a
            href={ONCHAINKIT_LINK}
            className="flex cursor-pointer items-center pt-1"
            target="_blank"
            rel="noreferrer"
          >
            <p className="text-sm leading-relaxed">Team</p>
            <span className="pl-1">
              <ExternalLinkSvg />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
