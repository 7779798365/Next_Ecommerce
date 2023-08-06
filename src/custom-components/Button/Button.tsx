import React from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Buttons = ({
  text,
  path,
}: {
  text: string;
  path?: string | undefined;
}) => {
  return (
    <Button className="bg-[#F8DE7E]">
      <Link className="flex" href={path || "/"}>
        <ShoppingCart className="mr-2 h-4 w-4" /> {text}
      </Link>
    </Button>
  );
};

export default Buttons;
