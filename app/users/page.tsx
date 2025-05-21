import UserCard from "@/components/ui/user-card";
import User_Card from "@/components/ui/user-card";
import {IconLogout2, IconUser, IconUserCog} from "@tabler/icons-react";

export default function User_Page() {
    return (
        <div id="container" className="flex h-[100vh] text-black">
            <section id="navigation" className="bg-gray-400 p-4 w-[200px]">
            <h1 className="text-3xl font-bold text-center">Connect</h1>
            <div className="flex flex-col gap-2 mt-4">
                <button className="bg-transparent border-none p-2.5 text-left text-base cursor-pointer flex items-center gap-2 text-black rounded-lg"> 
                    <IconUser></IconUser> User</button>
                <button className="bg-transparent border-none p-2.5 text-left text-base cursor-pointer flex items-center gap-2 text-black rounded-lg"> 
                    <IconUserCog></IconUserCog>Hak Akses</button>
                <button className="bg-transparent border-none p-2.5 text-left text-base cursor-pointer flex items-center gap-2 text-black rounded-lg">
                    <IconLogout2></IconLogout2>Logout</button>
                </div>
            </section>
            <section id="content" className="bg-white w-[85%] flex-1 p-[30px] overflow-y-auto">
                <input type="search" placeholder="Cari Users" className="w-full p-3 border border-black rounded-lg mb-7 text-base"></input>
                <div className="flex flex-col gap-4 user-list">
                <UserCard/>
                <UserCard/>
                <UserCard/>
                </div>
            </section>
        <button className="fixed right-5 bottom-5 w-[42px] h-[42px] rounded-lg text-[26px] bg-[#e0e0e0] border-none cursor-pointer fab">+</button>
        </div>
    );
}