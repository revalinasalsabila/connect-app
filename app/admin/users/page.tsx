import UserCard from "@/components/ui/user-card";
import User_Card from "@/components/ui/user-card";
import { IconLogout2, IconUser, IconUserCog } from "@tabler/icons-react";

export default function User_Page() {
  return (
    <div id="container">
      <input
        type="search"
        placeholder="Cari Users"
        className="w-full p-3 border border-black rounded-lg mb-7 text-base"
      ></input>
      <div className="flex flex-col gap-4 user-list">
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </div>
  );
}
