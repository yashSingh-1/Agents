import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { SignedOut, SignInButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="w-full h-fit p-5 flex justify-between">
      <div className="text-xl font-mono">Automate AI</div>
      <div>
        <Link href="/login">
            <Button>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
