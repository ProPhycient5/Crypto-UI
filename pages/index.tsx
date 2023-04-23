import Image from "next/image";
import { Inter } from "next/font/google";
import Root from "../components/Root";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Root />
    </div>
  );
}
