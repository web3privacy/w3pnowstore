import OnchainStoreItem from './OnchainStoreItem';
import { useOnchainStoreContext } from './OnchainStoreProvider';

export default function OnchainStoreItems() {
  const { products } = useOnchainStoreContext();

  return (
    <div className="scroll mb-16 p-8 md:mb-0">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
        {products?.map((item) => (
          <OnchainStoreItem {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
