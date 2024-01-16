"use client";

import { useRouter } from "next/navigation";

export default function Product() {
  const router = useRouter();

  return (
    <>
      <h1>product page {router.query}</h1>
    </>
  );
}
