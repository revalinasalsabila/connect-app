import { IconLogout2, IconUser, IconUserCog } from "@tabler/icons-react";
import { ReactNode } from "react";
export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div id="container" className="flex h-[100vh] text-black">
      <section id="navigation" className="bg-gray-400 p-4 w-[200px]">
        <h1 className="text-3xl font-bold text-center">Connect</h1>
        <div className="flex flex-col gap-2 mt-4">
          <button className="bg-transparent border-none p-2.5 text-left text-base cursor-pointer flex items-center gap-2 text-black rounded-lg">
            <IconUser></IconUser> User
          </button>
          <button className="bg-transparent border-none p-2.5 text-left text-base cursor-pointer flex items-center gap-2 text-black rounded-lg">
            <IconUserCog></IconUserCog>Hak Akses
          </button>
          <button className="bg-transparent border-none p-2.5 text-left text-base cursor-pointer flex items-center gap-2 text-black rounded-lg">
            <IconLogout2></IconLogout2>Logout
          </button>
        </div>
      </section>
      <section className="w-full p-4">{children}</section>
    </div>
  );
}
