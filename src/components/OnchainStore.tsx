import OnchainStoreCart from "./OnchainStoreCart";
import OnchainStoreItems from "./OnchainStoreItems";
import { OnchainStoreProvider } from "./OnchainStoreProvider";
import OnchainStoreSummary from "./OnchainStoreSummary";

export default function OnchainStore() {
  return (
    <OnchainStoreProvider>
      <main className="max-w-7xl mx-auto flex flex-col grow py-10">
        <div className="flex flex-col md:flex-row">
          <OnchainStoreSummary />
          <OnchainStoreItems />
        </div>
        <OnchainStoreCart />
      </main>
    </OnchainStoreProvider>
  );
}
