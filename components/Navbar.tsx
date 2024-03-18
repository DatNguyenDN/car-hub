import { ModeToggle } from "@/components/toggle-theme";
import CustomButton from "@/components/ui/CustomButton";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full absolute z-10 border-b-2 border-blue-400">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center px-6 py-4 ">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <div className="flex items-center gap-5">
          <CustomButton title="Sign In" containerStyles="" />
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
