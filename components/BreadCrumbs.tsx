import { useRouter } from "next/router";
export default function BreadCrumbs({ route }) {
  const router = useRouter();
  let routeString = route.replace(/([-])/g, " ");
  let bySlashArray: string[] = routeString.split("/");
  routeString = bySlashArray.map((val) => {
    let bySpace: string[] = val.split(" ");
    bySpace = bySpace.map(
      (spaceVal) =>
        spaceVal.substring(0, 1).toUpperCase() +
        spaceVal.substring(1, spaceVal.length)
    );
    return bySpace.join(" ");
  });
  // .join("/") as unknown as string[];
  return (
    <>
      {routeString.map(
        (str, index) =>
          str && (
            <p
              className={`text-xl lg:text-2xl inline-flex pr-1`}
              key={"p#" + index}
            >
              <span
                onClick={() => {
                  if (str && index === 1) {
                    if (str !== "/") str = "/";
                    router.push(str);
                  }
                }}
                className={`inline-flex ${
                  index === 1 && "text-blue-400 pr-1 cursor-pointer"
                }`}
              >
                {str}
              </span>
              {index !== routeString.length - 1 && "/"}
            </p>
          )
      )}
    </>
  );
}
