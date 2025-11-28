import React, { useEffect, useRef, useState } from "react";
import "./styles/Dropdown.css";
import Link from "next/link";

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(null);
    const navRef = useRef(null);

    // Close on outside click
    useEffect(() => {
        function handleOutsideClick(e) {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setOpenMenu(null);
            }
        }

        document.addEventListener("click", handleOutsideClick);
        return () => document.removeEventListener("click", handleOutsideClick);
    }, []);

    return (
        <nav ref={navRef} className="navbar">
            <Dropdown
                title="About Us"
                open={openMenu === "menu1"}
                onOpen={() => setOpenMenu("menu1")}
                submenu={[
                    { label: "MailID", href: "/a1" },
                    { label: "Company", href: "/a2" },
                ]}
            />

            <Dropdown
                title="Services"
                open={openMenu === "menu2"}
                onOpen={() => setOpenMenu("menu2")}
                submenu={[
                    { label: "Web Development", href: "#" },
                    { label: "SaaS", href: "/b2" },
                    { label: "App Development", href: "#" },
                    { label: "Customize services", href: "#" },
                    { label: "TerraX Crm", href: "#" },
                    { label: "Real-estate Services", href: "#" },
                ]}
            />
        </nav>
    );
}

function Dropdown({ title, open, onOpen, submenu = [] }) {
    return (
        <div className="dropdown" onMouseEnter={onOpen} onMouseLeave={() => onOpen(null)}>
            <button className="dropbtn">{title}</button>

            {open && (
                <div className="dropdown-content">
                    {submenu.map((item, idx) => (
                        <Link key={idx} href={item.href}>
                            {item.label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
