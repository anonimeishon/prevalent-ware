import Image from "next/image";
import { ReactNode } from "react";

export default function NavItem({
  children,
  image,
  text,
  onclick,
  badge,
  isDropdown,
  isProfile,
}: {
  children?: ReactNode;
  image: string;
  text: string;
  badge?: number;
  isDropdown?: boolean;
  isProfile?: boolean;
  onclick?: () => {};
}) {
  return (
    <>
      <div
        className={`flex h-7 items-center w-max relative ${
          onclick ? "cursor-pointer" : "pointer-events-none"
        }`}
        onClick={onclick}
      >
        <Image
          src={image}
          height={isProfile ? 35 : 20}
          width={isProfile ? 35 : 20}
        />
        <p className="text-white pl-2 flex items-center">{text}</p>
        {badge && (
          <div className="bg-red-500 text-white  rounded-full absolute h-4 w-4 flex items-center justify-center text-center -right-5 -top-2 text-sm font-semibold">
            2
          </div>
        )}
        {isDropdown && (
          <div className="flex itmes-center pl-2">
            <Image src={"/icons/downArrow.svg"} height={16} width={16} />
          </div>
        )}
      </div>
    </>
  );
}
