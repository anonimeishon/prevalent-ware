import BaseCard from "../components/cards/BaseCard";

export default function cardsPage({ children }) {
  return (
    <>
      <div className="bg-gray-200 p-8">
        <BaseCard
          image="/icons/industry.svg"
          title="Solicitudes de creación de empresas"
          description="2 solicitudes sin tratar"
        />
      </div>
    </>
  );
}
