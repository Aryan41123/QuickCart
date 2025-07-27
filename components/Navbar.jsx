// components/Navbar.jsx
'use client';
import React from "react";
import { assets, CartIcon } from "@/assets/assets";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { Menu } from "lucide-react";
import Footer from "./Footer";
import { SignInButton, useClerk, UserButton } from "@clerk/nextjs";

const Navbar = () => {
    const { isSeller, router, toggleSidebar, user } = useAppContext();


    return (
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700">
            <Image
                className="cursor-pointer w-28 md:w-32"
                onClick={() => router.push('/')}
                src={assets.logo}
                alt="logo"
                width={128}
                height={40}
            />

            {/* Desktop Nav Links */}
            <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
                <Link href="/" className="hover:text-gray-900 transition">Home</Link>
                <Link href="/all-products" className="hover:text-gray-900 transition">Shop</Link>
                <Link href="/about" className="hover:text-gray-900 transition">About Us</Link>
                <Link href="/contact" className="hover:text-gray-900 transition">Contact</Link>

                {/* Show Seller Dashboard on desktop only */}
                {isSeller && (
                    <button
                        onClick={() => router.push('/seller')}
                        className="text-xs border px-4 py-1.5 rounded-full"
                    >
                        Seller Dashboard
                    </button>
                )}
            </div>

            {/* Desktop Icons */}
            <ul className="hidden md:flex items-center gap-4">
                <Image className="w-4 h-4" src={assets.search_icon} alt="search icon" width={16} height={16} />

                <SignInButton mode="modal">
                    {
                        user ? <><UserButton>
                            <UserButton.MenuItems>
                                <UserButton.Action label="cart" labelIcon={<Image src={assets.cart_icon} alt="cart" width={20} height={20} />} onClick={() => router.push('/cart')} />
                            </UserButton.MenuItems>
                        </UserButton></> :
                            <button className="flex items-center gap-2 hover:text-gray-900 transition">
                                <Image src={assets.user_icon} alt="user icon" width={16} height={16} />
                                Account
                            </button>
                    }

                </SignInButton>
            </ul>

            {/* Mobile Icons Only (No Seller Dashboard here) */}
            <div className="flex items-center md:hidden gap-3">
                {
                    user ? <><UserButton>
                        <UserButton.MenuItems>
                            <UserButton.Action label="cart" labelIcon={<Image src={assets.cart_icon} alt="cart" width={16} height={16} />} onClick={() => router.push('/cart')} />
                        </UserButton.MenuItems>
                    </UserButton></> :
                        <SignInButton mode="modal">
                            <button className="flex items-center gap-2 hover:text-gray-900 transition">
                                <Image src={assets.user_icon} alt="user icon" width={16} height={16} />
                                Account
                            </button>
                        </SignInButton>
                }


                <Menu
                    size={24}
                    className="cursor-pointer ml-2"
                    onClick={toggleSidebar}
                />
            </div>
        </nav>
    );
};

export default Navbar;
