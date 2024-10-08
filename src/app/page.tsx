"use client";
import { useAccount } from "wagmi";
import OnchainStore from "src/components/OnchainStore";
import Navbar from "src/components/Navbar";

export default function Page() {
  const { address } = useAccount();

  return (
    <div className="flex h-full max-w-full flex-col px-1 max-h-screen">
      <Navbar />
      <OnchainStore />
    </div>
  );
}
