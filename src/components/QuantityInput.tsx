import { useCallback, useMemo } from 'react';
import {
  Quantities,
  QuantityInputButtonReact,
  QuantityInputReact,
} from 'src/types';
import { useOnchainStoreContext } from './OnchainStoreProvider';
import PlusSvg from 'src/svg/PlusSvg';
import MinusSvg from 'src/svg/MinusSvg';

function QuantityInputButton({
  onClick,
  svg,
  label,
}: QuantityInputButtonReact) {
  return (
    <button
      onClick={onClick}
      className="flex justify-center items-center h-8 w-8 rounded border border-gray-200 p-0"
    >
      <span className="sr-only">{label}</span>
      {svg}
    </button>
  );
}

export default function QuantityInput({ productId }: QuantityInputReact) {
  const { quantities, setQuantities } = useOnchainStoreContext();

  const currentItemQuantity = useMemo(() => {
    return quantities[productId] || 0;
  }, [quantities, productId]);

  const handleIncrement = useCallback(() => {
    setQuantities((prev: Quantities) => {
      return { ...prev, [productId]: currentItemQuantity + 1 };
    });
  }, [currentItemQuantity, productId]);

  const handleDecrement = useCallback(() => {
    const newQuantity = Math.max(0, currentItemQuantity - 1);
    setQuantities((prev: Quantities) => {
      return { ...prev, [productId]: newQuantity };
    });
  }, [currentItemQuantity, productId]);

  return (
    <div className="flex items-center space-x-2">
      <QuantityInputButton
        label="Decrease quantity"
        svg={<MinusSvg />}
        onClick={handleDecrement}
      />
      <span className="w-8 text-center text-sm font-medium">
        {currentItemQuantity}
      </span>
      <QuantityInputButton
        label="Increase quantity"
        svg={<PlusSvg />}
        onClick={handleIncrement}
      />
    </div>
  );
}
