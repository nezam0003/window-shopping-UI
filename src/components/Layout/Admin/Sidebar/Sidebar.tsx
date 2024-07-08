"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { sidebarNavigation } from '../navigation.menu.item';

function classNames(...classes: (string | boolean | undefined)[]) {
   return classes?.filter(Boolean)?.join(' ')
}

export default function Sidebar() {
   const pathName = usePathname();
   return (
      <aside className="bg-gray-800 text-gray-200 w-40 space-y-6 py-7">
         {/* <div className="flex items-center justify-center">
            <img className="h-10 w-10 rounded-full" src="https://randomuser.me/api/portraits/women/55.jpg" alt="User Avatar" />
            <span className="ml-2 font-bold">John Doe</span>
         </div> */}
         <nav>
            {sidebarNavigation?.map((item) => (
               <Link
                  key={item.name}
                  href={item.href}
                  className={classNames(
                     pathName === item.href ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-600 hover:text-white',
                     'block rounded-md px-3 py-2 text-sm font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
               >
                  {item.name}
               </Link>
            ))}
         </nav>
      </aside>
   )
}
