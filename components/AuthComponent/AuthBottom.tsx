import Link from "next/link";
import React from "react";

interface AuthBottomProps {
  href: string;
  title: string;
  toTitle: string;
}

export default function AuthBottom({ href, title, toTitle }: AuthBottomProps) {
  return (
    <Link href={href} className="text-sm font-semibold">
      {title} <span className="text-blue-500 hover:underline">{toTitle}</span>
    </Link>
  );
}
