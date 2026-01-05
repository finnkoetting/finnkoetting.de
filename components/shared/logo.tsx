import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/" className="inline-flex items-center gap-4 font-semibold tracking-tight">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-background overflow-hidden">
                <Image
                    src="/brand.svg"
                    width={128}
                    height={128}
                    alt="finnkoetting.de"
                    className="h-15 w-15"
                    priority
                />
            </span>
            <span className="text-sm sm:text-base">
                Finn Kötting
            </span>
        </Link>
    );
}
