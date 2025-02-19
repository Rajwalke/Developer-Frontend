const ShimmerUI=()=>{
    return (
<div className="flex justify-around flex-1 items-center shrink-0 min-h-screen bg-base-300 rounded-lg shadow-sm p-4 ">
<div className="w-5/12 bg-base-100 rounded-lg shadow-xl overflow-hidden">
      {/* Image skeleton with shimmer */}
      <div className="relative w-full h-64 bg-base-200 overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-base-200 via-base-100 to-base-200 -translate-x-full" />
        </div>
      </div>

      <div className="p-6 space-y-4">
        {/* Name skeleton */}
        <div className="relative h-8 bg-base-200 rounded overflow-hidden">
          <div className="absolute inset-0">
            <div className="w-full h-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-base-200 via-base-100 to-base-200 -translate-x-full" />
          </div>
        </div>

        {/* ID skeleton */}
        <div className="relative h-6 bg-base-200 w-3/4 rounded overflow-hidden">
          <div className="absolute inset-0">
            <div className="w-full h-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-base-200 via-base-100 to-base-200 -translate-x-full" />
          </div>
        </div>

        {/* About section */}
        <div className="space-y-2">
          <div className="relative h-4 bg-base-200 rounded overflow-hidden">
            <div className="absolute inset-0">
              <div className="w-full h-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-base-200 via-base-100 to-base-200 -translate-x-full" />
            </div>
          </div>
          <div className="relative h-4 bg-base-200 w-4/5 rounded overflow-hidden">
            <div className="absolute inset-0">
              <div className="w-full h-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-base-200 via-base-100 to-base-200 -translate-x-full" />
            </div>
          </div>
        </div>

        {/* Info row */}
        <div className="flex gap-4">
          <div className="relative h-4 bg-base-200 w-1/4 rounded overflow-hidden">
            <div className="absolute inset-0">
              <div className="w-full h-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-base-200 via-base-100 to-base-200 -translate-x-full" />
            </div>
          </div>
          <div className="relative h-4 bg-base-200 w-1/4 rounded overflow-hidden">
            <div className="absolute inset-0">
              <div className="w-full h-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-base-200 via-base-100 to-base-200 -translate-x-full" />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between gap-4 pt-4">
          <div className="relative h-12 bg-base-200 w-1/2 rounded-lg overflow-hidden">
            <div className="absolute inset-0">
              <div className="w-full h-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-base-200 via-base-100 to-base-200 -translate-x-full" />
            </div>
          </div>
          <div className="relative h-12 bg-base-200 w-1/2 rounded-lg overflow-hidden">
            <div className="absolute inset-0">
              <div className="w-full h-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-base-200 via-base-100 to-base-200 -translate-x-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    )
}
const styleTag = document.createElement('style');
styleTag.textContent = `
  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
`;
document.head.appendChild(styleTag);

export default ShimmerUI;