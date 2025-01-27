import OutlineButton from "@/components/Buttons/OutlineButton";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="h-full w-full flex flex-col items-center justify-center space-y-5">
            <h1 className="text-9xl font-bold">Oops!</h1>
            <h2 className="text-4xl font-bold">Sorry, we can't find that page</h2>
            <p>Let’s jump into those amazing projects!</p>
            <Link href="/projects">
                <OutlineButton>
                    View Projects
                </OutlineButton>
            </Link>
        </div>
    );
}