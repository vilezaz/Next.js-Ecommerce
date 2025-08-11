import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

export default function Loading() {
  return (
    <main className="min-h-[80vh] bg-[#171717] pt-10 md:pt-20 px-4">
      <div className="flex flex-col md:flex-row space-x-0 md:space-x-5 mb-5">
        
        {/* Hero product 1 main skeleton */}
        <div className="bg-[#000000] w-full md:w-4/6 h-[40vh] md:h-[70vh] md:mx-5 my-2 md:my-0 rounded-md p-4">
          <Skeleton height="100%" baseColor="#2b2b2b" highlightColor="#3a3a3a" />
        </div>

        {/* Two random product skeletons */}
        <div className="md:w-2/6 w-full flex justify-evenly gap-2 md:block md:space-y-5 mr-5">
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="bg-[#000000] w-full h-[28vh] md:h-[33.5vh] rounded-md p-4"
            >
              <Skeleton height="100%" baseColor="#2b2b2b" highlightColor="#3a3a3a" />
            </div>
          ))}
        </div>
      </div>

      {/* Products carousel skeleton */}
      <div className="w-full overflow-x-auto">
        <div className="bg-[#171717] flex space-x-2 md:space-x-5 flex-nowrap mb-5">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="bg-[#000000] md:min-w-[450px] min-w-[250px] h-[20vh] md:h-[30vh] rounded-md p-4"
            >
              <Skeleton height="100%" baseColor="#2b2b2b" highlightColor="#3a3a3a" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
