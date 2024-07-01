import { Button } from "@package/design-system";

import Image from "next/image";

import RootLayout from "./layout";

export default function Home() {
  return (
    <RootLayout>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className="dark:invert"
        width={100}
        height={24}
        priority
      />
      <Button>Service</Button>
    </RootLayout>
  );
}
