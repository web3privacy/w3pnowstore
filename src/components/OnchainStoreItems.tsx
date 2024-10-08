import OnchainStoreItem from "./OnchainStoreItem";
import { useOnchainStoreContext } from "./OnchainStoreProvider";

export default function OnchainStoreItems() {
  const { products } = useOnchainStoreContext();

  return (
    <div className="p-8 mb-8 md:mb-0 scroll">
      <div className="grid sm:grid-cols-2 gap-8 grid-cols-1">
        {products?.map((item) => <OnchainStoreItem {...item} />)}
      </div>
    </div>
  );
}
