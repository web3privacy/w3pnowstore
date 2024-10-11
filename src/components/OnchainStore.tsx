import Navbar from "./Navbar";
import OnchainStoreCart from "./OnchainStoreCart";
import OnchainStoreItems from "./OnchainStoreItems";
import { OnchainStoreProvider } from "./OnchainStoreProvider";
import OnchainStoreSummary from "./OnchainStoreSummary";

export default function OnchainStore() {
  return (
    <OnchainStoreProvider>
      <div className="flex h-full max-w-full flex-col px-1 max-h-screen">
        <Navbar />
        <main className="max-w-7xl mx-auto flex flex-col grow py-10">
          <div className="flex flex-col lg:flex-row grow pb-10 ">
            <OnchainStoreSummary />
            <OnchainStoreItems />
          </div>
          <OnchainStoreCart />
        </main>
      </div>
    </OnchainStoreProvider>
  );
}
