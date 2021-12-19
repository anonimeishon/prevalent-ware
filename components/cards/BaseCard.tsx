import Image from "next/image";

export default function BaseCard({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  console.log("🚀 ~ file: BaseCard.tsx ~ line 12 ~ image", image);
  return (
    <div className="w-full sm:w-3/5 lg:w-2/5 h-36 sm:h-56 lg:h-80  rounded-md shadow-md bg-white flex flex-col ">
      <div className="p-6 pr-12 flex flex-row sm:flex-col h-4/5">
        <div className="-mt-10 w-16 h-16 lg:w-32 lg:h-32">
          <Image
            className="ab object-cover"
            width="110"
            height="110"
            src={image}
            alt="Clickable card logo"
          />
        </div>
        <p className="text-gray-700 text-2xl md:text-3xl lg:text-4xl flex-1 w-full h-full flex items-center">
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
