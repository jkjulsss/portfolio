"use client";

import {
  LuHome,
  LuFolderHeart,
  LuLuggage,
  LuMessageCircle,
} from "react-icons/lu";
import {
  Navbar as NextUiNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
  Image,
  NavbarProps,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { useReducer } from "react";

const menuItems = ["Home", "Work", "Projects"];

export default function Navbar(props: NavbarProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useReducer((current) => !current, false);

  return (
    <NextUiNavbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      {...props}
      classNames={{
        base: "py-4 backdrop-filter-none bg-transparent",
        wrapper: "px-0 w-full justify-center bg-transparent",
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary-200",
        ],
      }}
      height="54px"
    >
      <NavbarContent
        className="gap-5 md:gap-8 rounded-full border-small border-default-200/20 bg-background/60 pl-2 pr-1 shadow-medium backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50"
        justify="center"
      >

        {/* Logo */}
        <NavbarBrand className="mr-2 w-[40vw] md:w-auto md:max-w-fit">
          <div className="rounded-full bg-foreground text-background">
            <Image
              alt="Logo"
              className="h-10 w-10 rounded-full"
              src="https://media.licdn.com/dms/image/v2/D4E03AQHDyHdZvyBx1A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1684182362657?e=1737590400&v=beta&t=T9LYfg65Hni0DWdcaq7WcjkuJ9v1vvRqMnRvT44ASs8"
            />
          </div>
          <span className="ml-2 font-medium md:hidden">Julius</span>
        </NavbarBrand>

        {/* Items */}
        <NavbarItem>
          Welcome
        </NavbarItem>
        <NavbarItem className="ml-2 !flex">
          <Link
            className="text-black flex gap-2 hover:text-foreground-900 text-medium ml-3 bg-primary/40 rounded-full px-3 py-3"
            href="https://cal.com/julius-kamina"
          >
            <LuMessageCircle size={20} />
            Let's Chat
          </Link>
        </NavbarItem>
      </NavbarContent>
    </NextUiNavbar>
  );
}
