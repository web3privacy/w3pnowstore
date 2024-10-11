import { useCallback, useMemo } from 'react';
import { useOnchainStoreContext } from './OnchainStoreProvider';
import { Pay, PayButton } from '@coinbase/onchainkit/pay';
import type { LifecycleStatus } from '@coinbase/onchainkit/pay';
import useCreateCharge from 'src/hooks/useCreateCharge';

export default function OnchainStoreCart() {
  const { quantities, products } = useOnchainStoreContext();

  const { createCharge } = useCreateCharge();

  const totalSum = useMemo(() => {
    return (
      products?.reduce(
        (sum, product) => sum + (quantities[product.id] || 0) * product.price,
        0,
      ) || 0
    );
  }, [products, quantities]);

  const handleStatusChange = useCallback((status: LifecycleStatus) => {
    console.log('onStatus', status);
  }, []);

  const chargeHandler = useCallback(() => {
    const description = Object.keys(quantities)
      .map((productId) => {
        return `${productId}(${quantities[productId]})`;
      })
      .join(',');
    const chargeDetails = {
      name: 'commerce template charge',
      description,
      pricing_type: 'fixed_price',
      local_price: {
        amount: totalSum.toString(),
        currency: 'USD',
      },
    };
    return createCharge(chargeDetails);
  }, [createCharge, quantities, totalSum]);

  return (
    <div className="-mx-[50vw] fixed right-1/2 bottom-0 left-1/2 w-screen border-gray-200 border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col items-start justify-between py-4 md:flex-row md:items-center">
          <span className="mb-2 text-gray-500 text-xs md:mb-0 md:w-1/3 lg:pl-8">
            Built with OnchainKit
          </span>
          <div className="flex w-full items-center justify-between pr-8 md:w-2/3 md:pl-5 xl:pr-0">
            <h2 className="font-bold text-lg md:w-11/12 ">
              TOTAL {totalSum.toFixed(2)} USDC
            </h2>
            <div className="w-64">
              <Pay onStatus={handleStatusChange} chargeHandler={chargeHandler}>
                <PayButton
                  coinbaseBranded={true}
                  text="Pay with Crypto"
                  disabled={!totalSum}
                />
              </Pay>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
