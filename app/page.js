import OutlineButton from "@/components/Buttons/OutlineButton";
import Image from "next/image";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

export default function Home() {
  return (
    <main
      id="homepage"
      
    >
      <div>
        <Image
          src="/logo.png"
          alt="Logo"
          width={780}
          height={64}
          className="mt-[80px] ml-[200px] relative z-10"
        />

        <h1 className="mt-[50px] ml-[200px] w-[30%] relative z-10">
          I build display banner ads for esteemed clients and projects for a variety of audiences, including gamers, natural hair community and ecommerce for small businesses
        </h1>

        <OutlineButton className="mt-[50px] ml-[200px] bg-white w-[200px] flex justify-around items-center relative z-10">
          View Portfolio <HiOutlineArrowLongRight className="text-4xl" />
        </OutlineButton>

        <Image
          alt="Triangles"
          src={"/main-triangles.png"}
          width={1182}
          height={1170}
          id="main_triangles"
          className="fixed bottom-0 right-0"
        />

      </div>
      
    </main>
  );
}
