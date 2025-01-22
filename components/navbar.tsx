"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { BookOpen, Menu as MenuIcon, X } from "lucide-react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";

const navItems = [
  { href: "/web-dev", label: "Web Development" },
  { href: "/interface-design", label: "Interface Design" },
  { href: "/seo", label: "Search Engine Optimization" },
  { href: "/branding", label: "Branding" },
  { href: "/hobby", label: "Hobby" },
  { href: "/individual", label: "Individual" },
  { href: "/team", label: "Team" },
  { href: "/enterprise", label: "Enterprise" },
];

// Logo Component
const Logo = () => (
  <div className="flex items-center space-x-2">
    <BookOpen className="h-6 w-6 text-primary mx-2" />
    <span className="text-xl font-semibold font-sans">LeetCodeJournal</span>
  </div>
);

// Menu Toggle Button
const MenuToggle = ({ isMenuOpen, toggleMenu }: { isMenuOpen: boolean; toggleMenu: () => void }) => (
  <div onClick={toggleMenu} className="lg:hidden focus:outline-none" role="button" aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
    <div className="flex flex-row justify-center items-center gap-2">
      <ThemeToggle />
      {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
    </div>
  </div>
);

// Mobile Menu
const MobileMenu = ({ isMenuOpen, toggleMenu, pathname }: { isMenuOpen: boolean; toggleMenu: () => void; pathname: string }) => {
  if (!isMenuOpen) return null;
  return (
    <div className="lg:hidden mx-auto max-w-[95%] mt-2">
      <nav className="rounded-lg border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/10 flex flex-col space-y-4 py-4 px-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`text-sm font-medium transition-colors hover:text-primary ${pathname === item.href ? "text-primary" : "text-muted-foreground"}`}
            onClick={toggleMenu}
          >
            {item.label}
          </Link>
        ))}
        <div className="flex flex-col space-y-4 pt-4 border-t">
          <Button asChild className="bg-primary-foreground text-white">
            <Link href="/auth/signin">Login</Link>
          </Button>
          <Button asChild onClick={toggleMenu}>
            <Link href="/auth/register">Sign up</Link>
          </Button>
        </div>
      </nav>
    </div>
  );
};

const Navbar1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [active, setActive] = useState<string | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-4 z-50 w-full">
      <div className="relative mx-auto max-w-[95%] rounded-xl">
        {/* Gradient Border */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-[2px] blur-lg"></div>

        {/* Navbar */}
        <nav className="relative z-10 h-16 rounded-xl border border-transparent bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/70 flex items-center justify-between px-4 sm:px-6">
          <Logo />
          <div className="hidden lg:flex items-center space-x-6">
            <Menu setActive={setActive}>
              <MenuItem setActive={setActive} active={active} item="Home">
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/web-dev">Web Development</HoveredLink>
                  <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                  <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                  <HoveredLink href="/branding">Branding</HoveredLink>
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="How it Works">
                <div className="text-sm grid grid-cols-2 gap-10">
                  <HoveredLink href="/hobby">Hobby</HoveredLink>
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="FAQs">
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/hobby">Hobby</HoveredLink>
                  <HoveredLink href="/individual">Individual</HoveredLink>
                  <HoveredLink href="/team">Team</HoveredLink>
                  <HoveredLink href="#">Enterprise</HoveredLink>
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="Blogs">
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="#">Blogs1</HoveredLink>
                  <HoveredLink href="#">Blogs2</HoveredLink>
                </div>
              </MenuItem>
            </Menu>
          </div>
            <div className="hidden lg:flex items-center space-x-4">
            <Button asChild className="bg-transparent hover:bg-primary hover:text-white border border-muted-foreground text-muted-foreground dark:text-muted-foreground dark:border-muted-foreground dark:hover:bg-primary dark:hover:text-black">
              <Link href="/auth/signin">Login</Link>
            </Button>
            <Button asChild className="bg-primary text-white hover:bg-primary-dark dark:bg-primary dark:text-black dark:hover:bg-primary-dark">
              <Link href="/auth/register">Sign up</Link>
            </Button>
            <ThemeToggle />
            </div>
          <MenuToggle isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </nav>
      </div>
      <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} pathname={pathname} />
    </header>

  );
};

export default Navbar1;
