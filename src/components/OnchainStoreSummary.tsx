export default function OnchainStoreSummary() {
  return (
    <div className="mb-8 flex flex-col justify-center border-gray-200 border-r p-8 md:mb-0 md:w-1/3 lg:border-r">
      <div className="space-y-4 text-left">
        <h2
          className="font-bold text-3xl leading-tight"
          style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontWeight: 700,
            fontStretch: 'condensed',
          }}
        >
          The future of commerce is less fee. More creativity.
        </h2>
        <p className="mt-4 text-sm leading-relaxed">
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
