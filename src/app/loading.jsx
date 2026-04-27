export default function Loading() {
  return (
    <div className="
      fixed inset-0 z-50
      flex items-center justify-center
      bg-white
    ">

      <div className="flex flex-col items-center gap-4">

        {/* SPINNER */}
        <div className="
          w-8 h-8
          rounded-full
          border-2 border-gray-200
          border-t-black
          animate-spin
        " />

        {/* TEXT */}
        <p className="text-sm text-gray-500">
          Loading...
        </p>

      </div>

    </div>
  );
}