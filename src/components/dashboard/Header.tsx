"use client";

import { useAuth } from '@/hooks/useAuth';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/assets/logo.png'
import  Profile from "@/assets/avatar-1.png"
export default function DashboardHeader() {
  const { user, signOut } = useAuth();

  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/dashboard" className="text-xl font-bold mx-3 ">
        <Image
        src={Logo}
      height={40}
        alt='logo'
        ></Image>
          </Link>

          <div className="flex items-center space-x-4">
            <div className="relative group">
              <button className="flex items-center space-x-2 mx-5 ">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <Image
                    src={user?.profileImage || Profile}
                   // 
                    alt="Profile"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-sm  text-gray-800  font-medium">{user ? `${user.firstName} ${user.lastName}`.trim() || 'User' : 'User'}</span>
              </button>

              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block">
                <Link
                  href="/dashboard/settings"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Settings
                </Link>
                <button
                  onClick={signOut}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Sign out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}