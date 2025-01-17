import { useEffect } from "react";
import { usePathname } from "next/navigation";

const useBackgroundEffect = () => {
  const pathname = usePathname();

  useEffect(() => {
    const body = document.querySelector("body");

    if (pathname === "/projects") {
      body.classList.remove("bg-faint-triangles");
      body.classList.remove("bg-blurred-triangles");
    } else {
      body.classList.add("bg-faint-triangles");
    }

    return () => {
      body.classList.add("bg-faint-triangles");
      body.classList.remove("bg-blurred-triangles");
    };
  }, [pathname]);
};

export default useBackgroundEffect;
