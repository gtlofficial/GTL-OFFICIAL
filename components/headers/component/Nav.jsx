"use client";

import Link from "next/link";
import Image from "next/image";
import { pagesData } from "@/data/menu";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  return (
    <>
      <li>
        <Link href={`/page-about`}>About</Link>
      </li>
      <li>
        <Link href={`/#`}>Services</Link> 
      </li>
      <li>
        <Link href={`/page-features`}>Features</Link> 
      </li>
      <li>
        <Link href={`/page-work`}>Work</Link>
      </li>
      <li>
        <Link href={`/page-pricing`}>Pricing</Link>
      </li>
      <li>
        <Link href={`/page-contact`}>Contact</Link>
      </li>
    </>
  );
}
