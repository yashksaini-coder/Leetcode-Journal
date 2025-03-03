"use client";
import { ChevronsDown, Github, Menu } from "lucide-react";
import React ,  { Suspense } from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { ToggleTheme } from "./ToggleTheme";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useAuth } from "@/hooks/useAuth";
import { signout } from "@/app/actions/action";
import { useRouter } from "next/navigation";

interface RouteProps {
  href: string;
  label: string;
}

interface FeatureProps {
  title: string;
  description: string;
}

const routeList: RouteProps[] = [
  // {
  //   href: "#testimonials",
  //   label: "Testimonials",
  // },
  {
    href: "#team",
    label: "Team",
  },
  {
    href: "#contact",
    label: "Contact",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
];

const featureList: FeatureProps[] = [
  {
    title: "Showcase Your Value ",
    description: "Highlight how your product solves user problems.",
  },
  {
    title: "Build Trust",
    description:
      "Leverages social proof elements to establish trust and credibility.",
  },
  {
    title: "Capture Leads",
    description:
      "Make your lead capture form visually appealing and strategically.",
  },
];

export const NavigationContent  = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { user, loading } = useAuth();
  const router = useRouter();
  const [authState, setAuthState] = React.useState({ user, loading });

  React.useEffect(() => {
    setAuthState({ user, loading });
  }, [user, loading]);

  const handleSignOut = async () => {
    await signout();
    router.push("/auth/signin");
  };

  const renderAuthButtons = () => {
    if (authState.loading) return null;

    return authState.user ? (
      <Button onClick={handleSignOut} className="rounded-2xl">
        Sign Out
      </Button>
    ) : (
      <>
        <div className="justify-between flex gap-2">
          <Link href="/auth/register">
            <Button className="rounded-xl">Register</Button>
          </Link>
          <Link href="/auth/signin">
            <Button className="rounded-xl">Login</Button>
          </Link>
        </div>
      </>
    );
  };


  return (
    <header className="shadow-inner w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-secondary/30 backdrop-blur-md">
      <Link href="/" className="flex items-center font-semibold">
        <Avatar>
          <AvatarImage src="/logo.png" />
          <AvatarFallback>LC</AvatarFallback>
        </Avatar>
        Leetcode Journal
      </Link>

      {/* <!-- Mobile --> */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="flex items-center">
                    <Avatar>
                      <AvatarImage src="/logo.png" />
                      <AvatarFallback>LC</AvatarFallback>
                    </Avatar>
                    <p className="text-sm">Leetcode Journal</p>
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2">
                {/* {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))} */}
                {renderAuthButtons()}
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-2" />

              {/* <ToggleTheme />
              <Separator className="mb-2" />
              {renderAuthButtons()} */}
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* <!-- Desktop --> */}
      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-card text-base">
              Features
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[600px] grid-cols-2 gap-5 p-4">
                <Image
                  src="https://avatars.githubusercontent.com/u/75042455?v=4"
                  alt="RadixLogo"
                  className="h-full w-full rounded-md object-cover"
                  width={600}
                  height={600}
                />
                <ul className="flex flex-col gap-2">
                  {featureList.map(({ title, description }) => (
                    <li
                      key={title}
                      className="rounded-md p-3 text-sm hover:bg-muted"
                    >
                      <p className="mb-1 font-semibold leading-none text-foreground">
                        {title}
                      </p>
                      <p className="line-clamp-2 text-muted-foreground">
                        {description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            {routeList.map(({ href, label }) => (
              <NavigationMenuLink key={href} asChild>
                <Link href={href} className="text-base px-2">
                  {label}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex gap-2">
        <ToggleTheme />
        {renderAuthButtons()}
      </div>
    </header>
  );
};

export const V2Navbar = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavigationContent />
    </Suspense>
  );
};