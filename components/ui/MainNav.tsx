"use client";

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link"
import { usePathname } from "next/navigation";


interface MainNavProps {
  data: Category[]
}

const MainNav: React.FC<MainNavProps> = ({
  data
}) => {
 const pathname = usePathname()
 const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <nav
      className="mx-6 flex font-medium items-start flex-col py-4 "
    >
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'text-bold  font-medium mb-3  text-white transition-colors hover:text-yellow-500',
            route.active ? 'text-yellow-500' : 'text-white-500'
          )}
        >
          {route.label}
      </Link>
      ))}
    </nav>
  )
};

export default MainNav;