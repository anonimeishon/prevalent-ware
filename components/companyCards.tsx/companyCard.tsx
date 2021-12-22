import Image from "next/image";
import ButtonIcon from "../buttonIcon";
import { downloadFile } from "../../util/helpers";
import { useState } from "react";
import DocumentsPopup from "./documentsPopup";

const FormContainer = ({
  children,
  hasLine = true,
}: {
  children: any;
  hasLine?: boolean;
}) => {
  return (
    <div className="flex flex-col basis-2/4 w-full lg:w-auto items-start justify-start">
      {children}
      {hasLine && (
        <span className="flex items-center justify-center w-full">
          <div className=" w-full mr-4 h-0.5 bg-gray-200"></div>
        </span>
      )}
    </div>
  );
};

export default function CompanyCard({
  children,
  company,
  approveFunction = () => {},
  denyFunction = () => {},
}: {
  children?: any;
  company: {
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
  };
  approveFunction: (() => {}) | (() => void);
  denyFunction: (() => {}) | (() => void);
}) {
  // const {
  //   companyName = "PrevalentWare",
  //   socialReason = "PREVALENTWARE S.A.S",
  //   idType = "NIT",
  //   id = "901375150-4",
  //   employeeAmount = "1 - 10",
  //   documents = [
  //     {
  //       name: "doc1",
  //       url: "https://static.mlstatic.com/org-img/homesnw/img/ml-logo-small@2x.png",
  //     },
  //     {
  //       name: "doc1",
  //       url: "https://static.mlstatic.com/org-img/homesnw/img/ml-logo-small@2x.png",
  //     },
  //   ],
  // } = company;
  const companyName = "PrevalentWare",
    socialReason = "PREVALENTWARE S.A.S",
    idType = "NIT",
    id = "901375150-4",
    employeeAmount = "1 - 10",
    documents = [
      {
        name: "doc1",
        url: "https://static.mlstatic.com/org-img/homesnw/img/ml-logo-small@2x.png",
      },
      {
        name: "doc1",
        url: "https://static.mlstatic.com/org-img/homesnw/img/ml-logo-small@2x.png",
      },
    ];
  const [popup, setPopup] = useState(false);
  return (
    <>
      {popup && <DocumentsPopup documents={documents} popupSetter={setPopup} />}
      <div className="flex flex-col items-center w-full h-full ">
        <div className="bg-white w-full h-[fit-content] lg:min-h-[730px] lg:max-w-4xl lg:h-[730px]  p-4  flex flex-col items-center shadow-md rounded-md">
          <div className="flex w-full items-center justify-center relative">
            <div className=" bg-gray-200 h-52 w-60 flex items-center justify-center">
              <Image src="/icons/prevalent.svg" height={150} width={170} />
            </div>
            <div className="hidden lg:flex flex-col absolute right-10 items-start gap-y-4 ">
              <ButtonIcon
                onClick={approveFunction}
                text="Aprobar Empresa"
                image="/icons/accept.svg"
              />
              <ButtonIcon
                onClick={denyFunction}
                text="Rechazar Empresa"
                image="/icons/deny.svg"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-8 lg:gap-y-0 py-8 lg:py-0 lg:flex-row lg:flex-wrap justify-around items-center w-5/6 flex-1">
            <FormContainer>
              <p className="text-sm  text-gray-400">Nombre de la empresa</p>
              <p className="text-base">{companyName}</p>
            </FormContainer>
            <FormContainer>
              <p className="text-sm text-gray-400">Razón Social</p>
              <p className="text-base">{socialReason}</p>
            </FormContainer>
            <FormContainer>
              <p className="text-sm text-gray-400">Tipo de identificación</p>
              <p className="text-base">{idType}</p>
            </FormContainer>
            <FormContainer>
              <p className="text-sm text-gray-400">Identificación</p>
              <p className="text-base">{id}</p>
            </FormContainer>
            <FormContainer>
              <p className="text-sm text-gray-400"># de empleados</p>
              <p className="text-base">{employeeAmount}</p>
            </FormContainer>

            <FormContainer hasLine={false}>
              <div className="hidden lg:flex ">
                <ButtonIcon
                  onClick={() => {
                    if (window.innerWidth >= 1050) {
                      setPopup(true);
                      console.log("documents");
                    }
                  }}
                  text="Ver archivos adjuntos"
                  image="/icons/clip.svg"
                />
              </div>
            </FormContainer>
          </div>
          <div className="flex lg:hidden flex-col w-full px-4 gap-y-6 py-6">
            {documents && (
              <>
                <p className="text-lg font-bold"> Documentos cargados</p>
                {documents.map((doc, index) => (
                  <div
                    onClick={() => {
                      downloadFile(doc.url);
                    }}
                    key={index + doc.name}
                    className="w-full px-4 flex items-center justify-between cursor-pointer text-lg"
                  >
                    <p>{doc.name}</p>
                    <Image src="/icons/pdf.svg" width="30" height="40" />
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
        <div className="flex flex-col  lg:hidden py-8 gap-y-8">
          <ButtonIcon
            onClick={approveFunction}
            text="Aprobar Empresa"
            image="/icons/accept.svg"
          />
          <ButtonIcon
            onClick={denyFunction}
            text="Rechazar Empresa"
            image="/icons/deny.svg"
          />
        </div>
      </div>
    </>
  );
}
