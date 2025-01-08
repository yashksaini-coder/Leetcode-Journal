import React from "react";

export default function LandingEmerlandButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button className="border-emerald-600 shadow-md hover:bg-emerald-600 text-emerald-950 dark:text-emerald-100 transition-colors duration-300 border px-4 py-2 font-semibold rounded-xl text-sm">
      {children}
    </button>
  );
}