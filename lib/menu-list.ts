import {
  Tag,
  Users,
  Settings,
  Bookmark,
  SquarePen,
  LayoutGrid,
} from "lucide-react";

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
      groupLabel: "Chats",
      menus: [
        {
          href: "",
          label: "AI Chats",
          active: pathname.includes("/chat"),
          icon: SquarePen,
          submenus: [
            {
              href: "/chat",
              label: "Generate your logo",
              active: pathname === "/chat",
            },
            {
              href: "/chat/soundtrack",
              label: "Generate your soundtrack",
              active: pathname === "/chat/soundtrack",
            },
          ],
        },
      ],
    },
  ];
}
