import BreadCrumbs from "../../components/BreadCrumbs";
import Image from "next/image";
export default function ApprovePage({ children, route }) {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center justify-center ">
        <div className="w-full">
          <BreadCrumbs route={route} />
        </div>
        <div className="bg-white w-full max-w-4xl flex-1 mt-6 p-4  flex flex-col items-center">
          <div className=" bg-gray-200 h-52 w-60 flex items-center justify-center">
            <Image src="/icons/prevalent.svg" height={150} width={170} />
          </div>
        </div>
      </div>
    </>
  );
}
