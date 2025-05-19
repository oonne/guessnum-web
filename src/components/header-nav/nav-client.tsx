'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MenuButton from './menu-button';
import MobileMenu from './mobile-menu';
import { NavClientProps } from './types';

/**
 * 导航客户端组件
 * 负责处理菜单交互逻辑和呈现PC端导航
 */
const NavClient = ({ lang, mainLinks, otherLinks, mainMenuTitle }: NavClientProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-4">
            {/* LOGO */}
            <Link
              href={`/${lang}`}
              className="text-xl font-bold hover:text-gray-300 transition-colors flex items-center gap-4"
            >
              <Image src="/img/logo.png" alt="logo" width={48} height={48} priority />
              <span className="hidden sm:inline">Guess Number Game</span>
            </Link>

            {/* 主导航 - 仅在PC端显示 */}
            <nav className="hidden sm:flex flex-wrap justify-center gap-4 sm:gap-6">
              {mainLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-sm sm:text-base"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center">
            {/* 其他导航 - 仅在PC端显示 */}
            <nav className="hidden sm:flex flex-wrap justify-center gap-4 sm:gap-6">
              {otherLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-sm sm:text-base"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* 移动端菜单按钮 */}
            <MenuButton isOpen={isMenuOpen} toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>

      {/* 移动端菜单 */}
      <MobileMenu
        isOpen={isMenuOpen}
        mainLinks={mainLinks}
        otherLinks={otherLinks}
        mainMenuTitle={mainMenuTitle}
      />
    </>
  );
};

export default NavClient;
