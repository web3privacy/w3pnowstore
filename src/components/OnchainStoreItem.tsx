import type { Product } from 'src/types';
import Image from 'next/image';
import QuantityInput from './QuantityInput';

export default function OnchainStoreItem({ id, name, price, image }: Product) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-start mb-1">
        <h2 className="text-xs font-regular">{name}</h2>
        <p className="text-xs font-regular">{price.toFixed(2)} USDC</p>
      </div>
      <Image src={image} alt="123" width={400} height={400} />
      <QuantityInput productId={id} />
    </div>
  );
}
