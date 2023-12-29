import { toast } from "@/components/ui/use-toast";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export function useToast( state: any, succes: boolean, title: string, href: string ) {
  useEffect(() => {
    if (succes) {
        toast({
          title: `${title}`
        })
      redirect(`${href}`);
    }
  }, [state]);
}