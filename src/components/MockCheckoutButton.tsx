import { CoinbasePaySvg } from 'src/svg/CoinbasePaySvg';
import { MockCheckoutButtonReact } from 'src/types';

export function MockCheckoutButton({ onClick }: MockCheckoutButtonReact) {
  return (
    <div className="w-64">
      <div className="default-dark flex w-full flex-col gap-2">
        <button
          type="button"
          onClick={onClick}
          className="cursor-pointer bg-[#0052FF] active:ock-bg-secondary-active hover:bg-[#0045D8] ock-border-radius ock-font-family font-semibold leading-normal w-full px-4 py-3 flex items-center justify-center"
        >
          <div className="flex items-center justify-center whitespace-nowrap">
            <div className="mr-2 flex h-5 w-5 shrink-0 items-center justify-center">
              <CoinbasePaySvg />
            </div>
          </div>
          <span className="ock-font-family font-semibold leading-normal text-gray-50">
            Pay with Crypto
          </span>
        </button>
      </div>
    </div>
  );
}
