import { ModeToggle } from "@/components/toggle-theme";
import CustomButton from "@/components/ui/CustomButton";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-between  items-center z-50 p-5 h-[80px] w-full border-b-2 border-blue-400">
      <div>Logo</div>
      <div className="flex items-center gap-5">
        <CustomButton
          title="Sign in"
          containerStyles="bg-cyan-500 rounded-full p-3"
        />
        <ModeToggle />
      </div>
    </nav>
  );
}
