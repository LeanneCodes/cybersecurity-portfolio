import OutlineButton from "@/components/Buttons/OutlineButton";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

export default function Home() {
  return (
    <main
      id="homepage" className="xxs:mt-[149px]"
    >
      <div>
        <Image
          src="/logo.png"
          alt="Logo"
          width={780}
          height={64}
          className="xxs:w-4/5 xxs:mx-auto mt-[80px] ml-[200px] relative z-10"
        />

        <h1 className="xxs:w-4/5 xxs:mx-auto xxs:text-center mt-[50px] ml-[200px] w-[40%] relative z-10 text-[20px]">
          I build display banner ads for esteemed clients and projects for a variety of audiences, including gamers, natural hair community and ecommerce for small businesses
        </h1>

        <Link href="/projects">
          <OutlineButton className="xxs:w-4/5 xxs:mx-auto xs:w-1/2 mt-[50px] ml-[200px] text-[20px] bg-white h-[60px] w-[230px] flex justify-around items-center relative z-10 group">
            View Portfolio
            <HiOutlineArrowLongRight className="text-4xl transition-transform duration-300 group-hover:translate-x-2" />
          </OutlineButton>
        </Link>

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
