import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import SearchBar from "./searchBar";
import { useSearchContext } from "../../context/searchContext";
import NavItem from "./navItem";

export default function Layout({ children }: { children: ReactNode }) {
  const { state, dispatch } = useSearchContext();
  const [isMobile, setIsMobile] = useState(false);
  const logWidth = () => {
    if (window.innerWidth < 1050) setIsMobile(true);
    else setIsMobile(false);
  };
  useEffect(() => {
    setIsMobile(window.innerWidth < 1050 ? true : false);
    window.addEventListener("resize", logWidth);

    return () => {
      window.removeEventListener("resize", logWidth);
    };
  }, []);
  return (
    <>
      <div className="h-100v overflow-hidden ">
        <nav className="bg-zinc-700 px-8 flex h-[70px] fixed w-full justify-center z-[9999] ">
          <div className="flex items-center justify-between w-full max-w-[1240px]	 ">
            <Link href="/">
              <a className="flex items-center cursor-pointer -ml-2">
                <Image
                  src="/icons/prevalentware.svg"
                  width={70}
                  height={70}
                  priority
                />
                <p className="text-white font-bold">Gente PreValente</p>
              </a>
            </Link>
            {!isMobile ? (
              <>
                <SearchBar searchState={state} searchSetter={dispatch} />
                <NavItem
                  image="/icons/cogs.svg"
                  text="Administración"
                  badge={2}
                />
                <NavItem
                  image="/icons/briefcase.svg"
                  text="Empleo"
                  isDropdown
                />
                <NavItem image="/icons/table.svg" text="Mi CV" />
                <NavItem
                  image="/icons/profile.svg"
                  text="Sebastián"
                  isDropdown
                  isProfile
                />
              </>
            ) : (
              <Image src="/icons/menu.svg" width={25} height={25} />
            )}
          </div>
        </nav>
        <div
          className="lg:p-8 bg-gray-200 flex items-center overflow-scroll justify-center w-full h-full "
          style={{ paddingTop: "102px" }}
        >
          <div className="w-full h-full px-8 max-w-7xl 	">{children}</div>
        </div>
      </div>
    </>
  );
}
