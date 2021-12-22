import BreadCrumbs from "../../components/BreadCrumbs";
import Image from "next/image";
import { ReactNode, useState } from "react";
import CompanyCard from "../../components/companyCards.tsx/companyCard";
import RightArrow from "../../public/icons/RightArrow";
import LeftArrow from "../../public/icons/LeftArrow";

const SwitchCompanyButtons = ({ selected, setSelected, companies }) => {
  return (
    <div className="flex w-full justify-center items-center py-4">
      <button
        onClick={() => {
          if (selected > 0) {
            setSelected((prev) => prev - 1);
          }
        }}
      >
        <LeftArrow fill={selected === 0 ? "#9F9F9F" : "#000"} />
      </button>
      <div className="px-4">
        Empresa {selected + 1} de {companies.length} pendiente
        {companies.length > 1 && "s"} por aprobación
      </div>
      <button
        onClick={() => {
          if (selected < companies.length - 1) {
            setSelected((prev) => prev + 1);
          }
        }}
      >
        <RightArrow
          fill={selected === companies.length - 1 ? "#9F9F9F" : "#000"}
        />
      </button>
    </div>
  );
};

export default function ApprovePage({
  children,
  route,
  companies = [
    {
      companyName: "PrevalentWare",
      socialReason: "PREVALENTWARE S.A.S",
      idType: "NIT",
      id: "901375150-4",
      companyId: "901375150-4",
      isApproved: false,
      employeeAmount: "1 - 10",
      documents: [
        {
          name: "doc1",
          url: "https://static.mlstatic.com/org-img/homesnw/img/ml-logo-small@2x.png",
        },
        {
          name: "doc1",
          url: "https://static.mlstatic.com/org-img/homesnw/img/ml-logo-small@2x.png",
        },
      ],
    },
    {
      companyName: "PrevalentWare",
      socialReason: "PREVALENTWARE S.A.S",
      idType: "NIT",
      id: "901375150-4",
      companyId: "901375150-4",
      isApproved: false,
      employeeAmount: "1 - 10",
      documents: [
        {
          name: "doc1",
          url: "https://static.mlstatic.com/org-img/homesnw/img/ml-logo-small@2x.png",
        },
        {
          name: "doc1",
          url: "https://static.mlstatic.com/org-img/homesnw/img/ml-logo-small@2x.png",
        },
      ],
    },
  ],
}: {
  children: ReactNode;
  route: string;
  companies: {
    companyName: string;
    socialReason: string;
    idType: "NIT" | "CC";
    id: string;
    companyId: string;
    isApproved: boolean;
    employeeAmount: string;
    documents?: {
      name: string;
      url: string;
    }[];
  }[];
}) {
  const [selected, setSelected] = useState(0);
  return (
    <>
      <div className="w-full h-[fit-content] flex flex-col items-center justify-center ">
        <div className="w-full  ">
          <BreadCrumbs route={route} />
        </div>
        <div className="block lg:hidden">
          <SwitchCompanyButtons
            selected={selected}
            setSelected={setSelected}
            companies={companies}
          />
        </div>
        <div className="mt-6 h-full w-full flex flex-col  justify-center">
          <CompanyCard
            company={companies[selected]}
            approveFunction={() => {
              console.log("approve");
            }}
            denyFunction={() => {
              console.log("deny");
            }}
          />
        </div>
        <div className="hidden lg:block">
          <SwitchCompanyButtons
            selected={selected}
            setSelected={setSelected}
            companies={companies}
          />
        </div>
      </div>
    </>
  );
}
