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
                    <div className="border border-black rounded-lg p-2 flex justify-between items-center user card">
                        <div className="user-info">
                            <h2 className="text-[18px] font-bold mb-[1px]">Rahmat Saudi Al Fathir As</h2>
                            <p className="text-base text-black mb-2">rahmatsaudi@universitasmulia.ac.id</p>
                            <span className="bg-black text-white text-[11px] px-[6px] py-[3px] rounded mr-[6px] inline-black badge">Admin</span>
                            <span className="bg-black text-white text-[11px] px-[6px] py-[3px] rounded mr-[6px] inline-black badge">Employee</span>
                        </div>
                        <span className="bold-text status text-[16px]">Aktif</span>
                    </div>

                <div className="border border-black rounded-lg p-2 flex justify-between items-center user-card">
                    <div className="user-info">
                        <h2 className="text-[18px] font-bold mb-[1px]">Lintang</h2>
                        <p className="text-base text-black mb-2">lintang@universitasmulia.ac.id</p>
                        <span className="bg-black text-white text-[11px] px-[6px] py-[3px] rounded mr-[6px] inline-black badge">Employee</span>
                    </div>
                    <span className="bold-text status text-[16px]">Aktif</span>
                </div>

                <div className="border border-black rounded-lg p-2 flex justify-between items-center user-card">
                    <div className="user-info">
                        <h2 className="text-[18px] font-bold mb-[1px]">Shafira</h2>
                        <p className="text-base text-black mb-2">shafira@universitasmulia.ac.id</p>
                        <span className="bg-black text-white text-[11px] px-[6px] py-[3px] rounded mr-[6px] inline-black badge">Employee</span>
                    </div>
                    <span className="bold-text status text-[16px]">Aktif</span>
                </div>

                <div className="border border-black rounded-lg p-2 flex justify-between items-center user-card">
                    <div className="user-info">
                        <h2 className="text-[18px] font-bold mb-[1px]">Lebah Ganteng</h2>
                        <p className="text-base text-black mb-2">lebahganteng@universitasmulia.ac.id</p>
                        <span className="bg-black text-white text-[11px] px-[6px] py-[3px] rounded mr-[6px] inline-black badge">Employee</span>
                    </div>
                    <span className="bold-text status text-[16px]">Suspended</span>
                </div>
            </div>
        </section>
        <button className="fixed right-5 bottom-5 w-[42px] h-[42px] rounded-lg text-[26px] bg-[#e0e0e0] border-none cursor-pointer fab">+</button>
        </div>
    );
}