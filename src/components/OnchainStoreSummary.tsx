export default function OnchainStoreSummary() {
  return (
    <div className="md:w-1/3 p-8 mb-8 md:mb-0 flex flex-col justify-center border-gray-200 border-r">
      <div className="text-left space-y-4">
        <h2
          className="text-3xl font-bold leading-tight"
          style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontWeight: 700,
            fontStretch: "condensed",
          }}
        >
          The future of commerce is less fee. More creativity.
        </h2>
        <p className="text-sm leading-relaxed mt-4">
          Frustration over fees and delays are the top reasons why nearly 9 in
          10 Americans want an updated financial system.
        </p>
        <p className="text-sm leading-relaxed">
          People and businesses lose tens of billions of dollars in transaction
          fees and countless hours in delays to the current system that they
          wouldn't with onchain payments.
        </p>
        <p className="text-sm leading-relaxed">
          We're updating the system so it's cheaper and faster.
        </p>
      </div>
    </div>
  );
}
