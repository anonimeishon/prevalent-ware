import Image from "next/image";
import { ReactNode } from "react";
export default function ButtonIcon({
  children,
  text,
  onClick,
  image,
}: {
  children?: ReactNode;
  text: string;
  onClick?: (() => {}) | (() => void);
  image: string;
}) {
  return (
    <div
      onClick={onClick}
      className="bg-white text-base w-52 items-center justify-start font-bold p-2 cursor-pointer rounded-md shadow-lg flex "
    >
      <span className="pr-1 flex items-center">
        <Image src={image} width={30} height={30} />
      </span>
      {text}
    </div>
  );
}
