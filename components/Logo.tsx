import LogoName from "@logos/logo.svg";
import Link from "next/link";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/" className="overflow-hidden" prefetch={false}>
      <div className="flex items-center w-72 h-14">
        <AspectRatio
          ratio={16 / 9}
          className="flex items-center justify-center"
        >
          <Image
            src={LogoName}
            alt="logo"
            className="dark:filter dark:invert"
            width={175}
          />
        </AspectRatio>
      </div>
    </Link>
  );
};

export default Logo;
