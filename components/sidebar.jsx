// components/Sidebar.jsx
'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { assets } from "@/assets/assets"; // Still needed for other assets like user_icon
import { useAppContext } from "@/context/AppContext";
import { X } from "lucide-react"; // Import the X icon for closing

const Sidebar = () => {
    const { isSidebarOpen, toggleSidebar, isSeller, router } = useAppContext();

    return (
        <>
            {/* Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={toggleSidebar} // Clicking overlay closes sidebar
                ></div>
            )}

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out
                ${isSidebarOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}
            >
                <div className="flex justify-end p-4">
                    <X // Using Lucide X icon for close button
                        size={24}
                        className="cursor-pointer"
                        onClick={toggleSidebar} // Clicking X closes sidebar
                    />
                </div>
                <nav className="flex flex-col p-4 gap-4 text-gray-700">
                    <Link
                        href="/"
                        className="hover:text-gray-900 transition text-lg"
                        onClick={toggleSidebar} // Close sidebar on link click
                    >
                        Home
                    </Link>
                    <Link
                        href="/all-products"
                        className="hover:text-gray-900 transition text-lg"
                        onClick={toggleSidebar} // Close sidebar on link click
                    >
                        Shop
                    </Link>
                    <Link
                        href="/about"
                        className="hover:text-gray-900 transition text-lg"
                        onClick={toggleSidebar} // Close sidebar on link click
                    >
                        About Us
                    </Link>
                    <Link
                        href="/contact"
                        className="hover:text-gray-900 transition text-lg"
                        onClick={toggleSidebar} // Close sidebar on link click
                    >
                        Contact
                    </Link>
                    {isSeller && (
                        <button
                            onClick={() => {
                                router.push('/seller');
                                toggleSidebar(); // Close sidebar after navigation
                            }}
                            className="text-base border px-4 py-2 rounded-full mt-2 self-start"
                        >
                            Seller Dashboard
                        </button>
                    )}
                </nav>
            </div>
        </>
    );
};

export default Sidebar;