"use client";
import SheetData from "../../../components/dashboardComponents/Sheetdata";
import { Disc, GithubIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";

export default function MainPage() {
  return (
    <main className="h-fit pt-7  ">
      <div className=" w-full h-full min-h-screen rounded-lg px-5">
        <SheetData />
        <div className="mt-40 mx-3"></div>
      </div>
    </main>
  );
}