import { BookA, FileQuestion, Settings, User } from "lucide-react";

export const SidebarData = [
    {
        title: "Profile",
        icon: User,
        href: "/dashboard/profile",
    },
    {
        title: "Problems",
        icon: FileQuestion,
        href: "/dashboard/problems",
    },
    {
        title: "Journal",
        icon: BookA,
        href: "/dashboard/journal",
    },
    {
        title: "Settings",
        icon: Settings,
        href: "/dashboard/settings",
    },
];
