import Navbar from './Navbar';
import OnchainStoreCart from './OnchainStoreCart';
import OnchainStoreItems from './OnchainStoreItems';
import { OnchainStoreProvider } from './OnchainStoreProvider';
import OnchainStoreSummary from './OnchainStoreSummary';

export default function OnchainStore() {
  return (
    <OnchainStoreProvider>
      <div className='flex h-full max-h-screen max-w-full flex-col px-1'>
        <Navbar />
        <main className='mx-auto flex max-w-7xl grow flex-col py-10'>
          <div className="flex flex-col md:flex-row grow">
            <OnchainStoreSummary />
            <OnchainStoreItems />
          </div>
          <OnchainStoreCart />
        </main>
      </div>
    </OnchainStoreProvider>
  );
}
