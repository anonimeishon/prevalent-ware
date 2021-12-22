import { Dispatch, ReactNode, SetStateAction } from "react";
import { downloadFile } from "../../util/helpers";
import Image from "next/image";
import X from "../../public/icons/X";
export default function DocumentsPopup({
  children,
  documents,
  popupSetter,
}: {
  children?: ReactNode;
  documents: { name: string; url: string }[];
  popupSetter: Dispatch<SetStateAction<boolean>>;
}) {
  console.log(documents);
  return (
    <div className="w-full h-full bg-gray-500 bg-opacity-50 absolute top-0 left-0 z-[9998] flex items-center justify-center overflow-hidden">
      <div
        className={`w-[533px] min-h-[572px] h-[fit-content] bg-white max-h-[572px] relative flex flex-col`}
      >
        <p className="text-2xl py-4 font-bold w-full  text-center">
          Documentos cargados
        </p>
        <div
          className="absolute right-2 top-3"
          onClick={() => {
            popupSetter(false);
          }}
        >
          <X fill="black" width="15" height="15" />
        </div>
        <div className="flex flex-1 overflow-scroll flex-col w-full px-4 gap-y-6 py-6  ">
          {documents.length && (
            <>
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
    </div>
  );
}
