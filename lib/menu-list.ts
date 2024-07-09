import { SquarePen, LayoutGrid } from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: any;
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/galery",
          label: "Galery",
          active: pathname.includes("/galery"),
          icon: LayoutGrid,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "Services",
      menus: [
        {
          href: "",
          label: "Generate",
          active: pathname.includes("/generate"),
          icon: SquarePen,
          submenus: [
            {
              href: "/generate-logo",
              label: "Logo",
              active: pathname === "/generate-logo",
            },
            {
              href: "generate-soundtrack",
              label: "Soundtrack",
              active: pathname === "/generate-soundtrack",
            },
          ],
        },
        {
          href: "",
          label: "Chat",
          active: pathname.includes("/chat"),
          icon: SquarePen,
          submenus: [
            {
              href: "/chat",
              label: "Ask about ...",
              active: pathname === "/chat",
            },
          ],
        },
      ],
    },
  ];
}
