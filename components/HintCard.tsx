"use client";

import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export function HintCard({ hints }: { hints: string[] }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild className="w-48rem rounded-none">
        <Button className="text-black hover:bg-purple-700 bg-white hover:text-white" variant="outline">Hints</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-h-[50%] max-w-[600px] w-full backdrop-blur bg-opacity-100 border border-gray-100 text-white">
        <AlertDialogHeader>
          <AlertDialogTitle className="w-16 px-2 bg-purple-500">Hints</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription className="p-4 dark:text-white text-black">
          <div>
            <ul className="list-outside list-disc">
            {hints.slice(0, 3).map((hint, index) => (
              <li key={index} className="mb-2 dark:text-white text-black text-wrap text-sm">{String(hint)}</li>
            ))}
            </ul>
          </div>
        </AlertDialogDescription>
        <AlertDialogFooter className="rounded-none dark:text-white text-black">
          <AlertDialogCancel >Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}