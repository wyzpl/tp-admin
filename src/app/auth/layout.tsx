"use client";

import Image from "next/image";

export default function AuthLayout(props: any) {
  return (
    <>
      <main className="flex justify-center items-center">
        <div className="flex-1 text-center bg-black text-white h-screen flex items-center justify-center">
          <Image src={"/logo.png"} width={500} height={500} alt="logo"></Image>
        </div>
        <div className="flex-1 flex h-full items-center p-4 lg:p-8">{props.children}</div>
      </main>
    </>
  );
}
