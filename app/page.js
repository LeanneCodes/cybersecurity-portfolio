import Image from "next/image";

export default function Home() {
  return (
    <main
      className="h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/faint-triangles-bg.png')" }}
    >
      <Image
        alt="Triangles"
        src={"/main-triangles.png"}
        width={1182}
        height={1170}
        className="fixed bottom-0 right-0"
      />
      <h1 className="text-black">
        body
      </h1>
    </main>
  );
}
