import type { Product } from 'src/types';
import Image from 'next/image';
import QuantityInput from './QuantityInput';

export default function OnchainStoreItem({ id, name, price, image }: Product) {
  return (
    <div className="store-item mx-auto flex w-full flex-col border-r p-4 sm:mx-0 lg:p-6">
      <div className="mb-1 flex items-start justify-between">
        <h2 className="font-regular text-xs">{name}</h2>
        <p className="font-regular text-xs">{price.toFixed(2)} USDC</p>
      </div>
      <Image src={image} alt="123" width={280} height={280} />
      <QuantityInput productId={id} />
    </div>
  );
}
