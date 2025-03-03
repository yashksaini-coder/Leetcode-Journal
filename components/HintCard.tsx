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
      <AlertDialogTrigger asChild className="w-full sm:w-96 rounded-none">
        <Button className="py-2 text-black dark:text-white hover:bg-purple-700 bg-white dark:bg-gray-800 hover:text-white" variant="outline">Hints</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="w-full sm:max-w-96 backdrop-blur bg-opacity-100 border border-gray-100 dark:border-gray-700 text-black dark:text-white">
        <AlertDialogHeader>
          <AlertDialogTitle className="w-full px-2 bg-purple-500">Hints</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription className="rounded-none">
          <div>
            <ul className="list-outside list-disc">
            {hints.slice(0, 3).map((hint, index) => (
              <li key={index} className="mb-2 text-black dark:text-white text-wrap text-sm">{String(hint)}</li>
            ))}
            </ul>
          </div>
        </AlertDialogDescription>
        <AlertDialogFooter className="rounded-none">
          <AlertDialogCancel className="rounded-none">Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}