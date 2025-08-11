import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loading() {
  return (
    <div className="bg-[#171717] min-h-[90vh] w-full pt-20 md:pt-30">
      <div className="bg-black w-full md:w-[420px] mx-auto rounded-lg p-5">
        {/* Title */}
        <Skeleton
          height={40}
          width="70%"
          baseColor="#2b2b2b"
          highlightColor="#3a3a3a"
          className="mx-auto mb-3"
        />

        {/* Subtitle */}
        <Skeleton
          height={20}
          width="90%"
          baseColor="#2b2b2b"
          highlightColor="#3a3a3a"
          className="mx-auto mb-5"
        />

        {/* Form fields like passowrd or name */}
        <div className="flex flex-col gap-4 mb-4">
          <Skeleton
            height={45}
            baseColor="#2b2b2b"
            highlightColor="#3a3a3a"
            className="rounded-md"
          />
          <Skeleton
            height={45}
            baseColor="#2b2b2b"
            highlightColor="#3a3a3a"
            className="rounded-md"
          />
        </div>

        {/* Button */}
        <Skeleton
          height={50}
          baseColor="#2b2b2b"
          highlightColor="#3a3a3a"
          className="rounded-full mb-3"
        />

        {/* Bottom link */}
        <Skeleton
          height={20}
          width="60%"
          baseColor="#2b2b2b"
          highlightColor="#3a3a3a"
          className="mx-auto"
        />
      </div>
    </div>
  );
}
