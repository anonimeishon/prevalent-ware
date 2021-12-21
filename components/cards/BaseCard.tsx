import Image from "next/image";
import { CardT } from "./types";

export default function BaseCard({
  image,
  title,
  description,
  onclick,
}: CardT) {
  return (
    <div
      onClick={onclick}
      className={`w-full sm:w-[36rem] ${
        onclick ? "cursor-pointer" : "pointer-events-none"
      }  h-36 sm:h-56 lg:h-80 max-w-xl  rounded-md shadow-md bg-white flex flex-col`}
    >
      <div className="p-6 pr-12 flex flex-row sm:flex-col h-4/5">
        <div className="-mt-10 w-[62px] h-16 lg:w-[107px] lg:h-32">
          <Image
            className="object-cover"
            width="107"
            height="115"
            src={image}
            alt="Clickable card logo"
          />
        </div>
        <p className="text-gray-700 text-xl sm:text-3xl  lg:text-4xl flex-1 w-full h-full flex items-center pl-4 sm:pl-0">
          {title}
        </p>
      </div>
      <span className="flex items-center justify-center w-full">
        <div className=" w-full h-0.5 bg-gray-200"></div>
      </span>
      <div className="pl-6 pr-12 flex flex-row flex-1 items-center text-gray-400 ">
        <Image src="/icons/clock.svg" height={20} width={20} />
        <p className="pl-2 w-30 text-xs">{description}</p>
      </div>
    </div>
  );
}
