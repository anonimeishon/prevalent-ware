import Image from "next/image";
import { ReactNode } from "react";
export default function ({
  searchState,
  searchSetter,
}: {
  children?: ReactNode;
  searchState: string;
  searchSetter: (string) => void;
}) {
  return (
    <>
      <div
        className="flex items-center justify-center"
        onClick={() => {
          document.getElementById("searchBarId").focus();
        }}
      >
        <div className="pr-1  flex items-center justify-center w-8 h-8 cursor-pointer">
          <Image src="/icons/magnifier.svg" height={16} width={16} />
        </div>
        <input
          id="searchBarId"
          type="text"
          value={searchState}
          className="text-white rounded-sm outline-none bg-zinc-700"
          placeholder="Search..."
          onChange={(e) => {
            searchSetter(e.target.value);
          }}
        />
        <div
          className="flex items-center justify-center cursor-pointer  w-4 h-4"
          onClick={() => {
            searchSetter("");
            document.getElementById("searchBarId").focus;
          }}
        >
          <Image src="/icons/x.svg" height={10} width={10} />
        </div>
      </div>
    </>
  );
}
