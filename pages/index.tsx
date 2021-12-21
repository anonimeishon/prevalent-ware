import { ReactNode } from "react";
import BaseCard from "../components/cards/BaseCard";
import { CardT } from "../components/cards/types";
import { useSearchContext } from "../context/searchContext";
import { useRouter } from "next/router";

export default function cardsPage({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { state } = useSearchContext();

  const cards: CardT[] = [
    {
      image: "/icons/industry.svg",
      title: "Solicitudes de creación de empresas",
      description: "2 solicitudes sin tratar",
      onclick: () => {
        router.push("/administracion/aprobacion-de-empresas");
      },
    },
    {
      image: "/icons/chart.svg",
      title: "Indicadores",
      description: "Visitado por última vez: 31/01/2020",
    },
    {
      image: "/icons/user.svg",
      title: "Inscripción de empleados en empresas",
      description: "3 usuarios sin empresa registrada",
    },
    {
      image: "/icons/usersCog.svg",
      title: "Gestión de usuarios",
      description: "532 usuarios activos en la plataforma",
    },
  ];
  const Cards = (card: CardT) => {
    return (
      <BaseCard
        image={card.image}
        title={card.title}
        description={card.description}
        onclick={card?.onclick}
      />
    );
  };
  return (
    <>
      <div className="flex pt-10 flex-wrap items-center justify-center gap-6 w-full h-full">
        {cards.map((card, index) =>
          state ? (
            card.title.toLowerCase().includes(state.toLowerCase()) && (
              <Cards key={`card-` + index} {...card} {...index} />
            )
          ) : (
            <Cards key={`card-` + index} {...card} {...index} />
          )
        )}
      </div>
    </>
  );
}
