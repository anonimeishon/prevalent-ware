export default function X({
  fill = "white",
  width = "12",
  height = "13",
}: {
  fill?: string;
  width?: string;
  height?: string;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 13"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.89453 4.94922L8.70703 0.320312H11.2383L7.08984 6.58984L11.3672 13H8.85938L5.92969 8.25391L3 13H0.480469L4.75781 6.58984L0.609375 0.320312H3.11719L5.89453 4.94922Z"
        fill={fill}
      />
    </svg>
  );
}
