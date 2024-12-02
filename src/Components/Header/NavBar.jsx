"use client"

import React, { useState } from 'react'
import DesktopMenu from './DesktopMenu'
import logo from "@/assests/Image/logo.png";
import Image from 'next/image';
import MobailMenu from './MobailMenu';
import "./NavBar.css"
import { CloseOutlined, HeartOutlined, MenuFoldOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
function NavBar() {
  const [activeMobileMenu,setActiveMobileMenu]=useState(false)
  return (
    <div className="">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <Image
              className=""
              src={logo}
              width={120}
              height={100}
              alt="logo"
            />
          </div>
          <div className="desktopMenu">
            <DesktopMenu />
            {/* <HeartOutlined /> */}
          </div>
          <div
            className={!activeMobileMenu ? "mobileMenuActive" : "mobileMenu"}
          >
            <MobailMenu activeMobileMenu={activeMobileMenu} />
          </div>

          <div className="hamburger">
            {activeMobileMenu ? (
              <CloseOutlined
                className=" text-[#845164]"
                style={{ fontSize: "20px" }}
                onClick={() => setActiveMobileMenu(!activeMobileMenu)}
              />
            ) : (
              <MenuFoldOutlined
                className=" text-[#845164]"
                style={{ fontSize: "20px" }}
                onClick={() => setActiveMobileMenu(!activeMobileMenu)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar