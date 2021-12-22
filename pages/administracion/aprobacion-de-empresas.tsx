import BreadCrumbs from "../../components/BreadCrumbs";
import Image from "next/image";
import { ReactNode, useEffect, useState } from "react";
import CompanyCard from "../../components/companyCards/companyCard";
import RightArrow from "../../public/icons/RightArrow";
import LeftArrow from "../../public/icons/LeftArrow";
import prisma from "../../config/prisma";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/client";

import type { CompanyT } from "../../types/types";

export async function getServerSideProps(context) {
  const companies = await prisma.company.findMany({
    include: { documents: true },
  });

  return {
    props: { companies },
  };
}
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
const updateCompanyStatus = gql`
  mutation UpdateCompany(
    $where: CompanyWhereUniqueInput!
    $data: CompanyUpdateInput!
  ) {
    updateCompany(data: $data, where: $where) {
      status
      id
    }
  }
`;

export default function ApprovePage({
  children,
  route,
  companies,
}: {
  children: ReactNode;
  route: string;
  companies: CompanyT[];
}) {
  const [updateStatus, { loading, error }] = useMutation(updateCompanyStatus);
  const handleStatusUpdate = async (action: "approved" | "rejected") => {
    const { data } = await updateStatus({
      variables: {
        where: { id: company.id },
        data: { status: { set: action } },
      },
    });

    setCompany((val) => {
      const newCompany = {
        ...val,
        status: data.updateCompany.status,
      };
      const companyIndex = companies.findIndex(
        (comp: CompanyT) => comp.id === val.id
      );

      companies[companyIndex] = { ...newCompany };

      return newCompany;
    });
  };
  const [selected, setSelected] = useState(0);
  const [company, setCompany] = useState(companies[selected] as CompanyT);
  useEffect(() => {
    setCompany(companies[selected]);
  }, [selected]);
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
            company={company}
            approveFunction={() => {
              handleStatusUpdate("approved");
            }}
            denyFunction={() => {
              handleStatusUpdate("rejected");
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
