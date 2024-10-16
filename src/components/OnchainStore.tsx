import { Banner } from './Banner';
import Navbar from './Navbar';
import OnchainStoreCart from './OnchainStoreCart';
import OnchainStoreItems from './OnchainStoreItems';
import { OnchainStoreProvider } from './OnchainStoreProvider';
import OnchainStoreSummary from './OnchainStoreSummary';

export default function OnchainStore() {
  return (
    <OnchainStoreProvider>
      <div className="font-sansMono flex h-full max-h-screen max-w-full flex-col px-1">
        <Banner />
        <Navbar />
        <main className="mx-auto flex max-w-7xl grow flex-col pb-10 pt-24">
          <div className="flex grow flex-col pb-10 md:flex-row">
            <OnchainStoreSummary />
            <OnchainStoreItems />
          </div>
          <OnchainStoreCart />
        </main>
      </div>
    </OnchainStoreProvider>
  );
}
