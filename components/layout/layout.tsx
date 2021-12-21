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
      <div className="h-100v ">
        {!isMobile ? (
          <nav className="bg-zinc-700 px-8 flex h-[70px] w-full justify-center ">
            <div className="flex items-center justify-between w-full max-w-[1240px]	 ">
              <Link href="/">
                <a className="flex items-center cursor-pointer">
                  <Image
                    src="/icons/prevalentware.svg"
                    width={70}
                    height={70}
                    priority
                  />
                  <p className="text-white font-bold">Gente PreValente</p>
                </a>
              </Link>
              <SearchBar searchState={state} searchSetter={dispatch} />
              <NavItem
                image="/icons/cogs.svg"
                text="Administración"
                badge={2}
              />
              <NavItem image="/icons/briefcase.svg" text="Empleo" isDropdown />
              <NavItem image="/icons/table.svg" text="Mi CV" />
              <NavItem
                image="/icons/profile.svg"
                text="Sebastián"
                isDropdown
                isProfile
              />
            </div>
          </nav>
        ) : (
          <>
            <nav className="bg-zinc-700 px-8 flex h-[70px] w-full justify-center">
              <div className="flex items-center justify-between w-full max-w-[1240px]	 ">
                <Link href="/">
                  <a className="flex items-center cursor-pointer">
                    <Image
                      src="/icons/prevalentware.svg"
                      width={70}
                      height={70}
                      priority
                    />
                    <p className="text-white font-bold">Gente PreValente</p>
                  </a>
                </Link>
                <Image src="/icons/menu.svg" width={25} height={25} />
              </div>
            </nav>
          </>
        )}

        <div
          className="p-8 bg-gray-200 flex items-center justify-center"
          style={{ height: "calc(100vh - 70px)" }}
        >
          <div className="w-full h-full flex items-center  justify-center overflow-scroll px-8 max-w-7xl 	">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
