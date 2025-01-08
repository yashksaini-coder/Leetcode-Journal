import React, { ButtonHTMLAttributes } from "react";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

interface LoadingButtonProps {
  loading: boolean;
  loadingTitle: string;
  title: string;
  type: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

export default function LoadingButton({
  loading,
  loadingTitle,
  title,
  type,
}: LoadingButtonProps) {
  return (
    <Button type={type} className="w-full" disabled={loading}>
      {loading ? (
        <div className="flex items-center justify-center gap-1">
          <Loader2 className="animate-spin" /> <span>{loadingTitle}</span>
        </div>
      ) : (
        title
      )}
    </Button>
  );
}
