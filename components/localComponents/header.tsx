"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full">
      <div className="w-full mx-auto flex justify-between items-center font-semibold">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold flex gap-2 items-center">
          <img src={"/logo.jpg"} className="w-10 rounded-xl" />
          <p>Bc Gym Center</p>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4">
          <Link href="/find-talent">
            <Button className="bg-secondary-c text-primary-c">
              Gym Membership
            </Button>
          </Link>
          <Link href="/find-talent">
            <Button className="bg-secondary-c text-primary-c">Services</Button>
          </Link>
          <Link href="/find-recruiters">
            <Button className="bg-secondary-c text-primary-c">
              Contact Us
            </Button>
          </Link>
          <Link href="/auth">
            <Button className="bg-primary-c text-secondary-c font-bold">
              Register
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded hover:bg-muted"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border px-4 py-3 flex flex-col gap-2">
          <Link href="/find-talent" onClick={() => setIsOpen(false)}>
            <Button className="bg-secondary-c text-primary-c w-full justify-start">
              Gym Membership
            </Button>
          </Link>
          <Link href="/find-talent" onClick={() => setIsOpen(false)}>
            <Button className="bg-secondary-c text-primary-c w-full justify-start">
              Services
            </Button>
          </Link>
          <Link href="/find-recruiters" onClick={() => setIsOpen(false)}>
            <Button className="bg-secondary-c text-primary-c w-full justify-start">
              Contact Us
            </Button>
          </Link>

          <div className="flex gap-2 pt-2 w-full">
            <Link href="/auth">
              <Button className="bg-primary-c text-secondary-c font-bold w-full justify-start">
                Register
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
