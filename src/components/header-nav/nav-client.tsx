'use client';

import { useState, useEffect, useRef } from 'react';
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
  const navRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // 动态设置导航栏高度
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (navRef.current) {
        const height = navRef.current.offsetHeight;
        document.documentElement.style.setProperty('--header-height', `${height}px`);
      }
    };

    // 初始设置
    updateHeaderHeight();

    // 监听窗口大小变化
    window.addEventListener('resize', updateHeaderHeight);

    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, []);

  return (
    <>
      <div ref={navRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center py-4">
          <div className="flex flex-wrap items-center gap-4 mb-2 sm:mb-0">
            {/* LOGO */}
            <Link
              href={`/${lang}`}
              className="text-2xl font-bold hover:text-gray-300 transition-colors flex items-center gap-4 font-zqk"
            >
              <Image src="/img/logo.png" alt="logo" width={48} height={48} priority />
              <span className="hidden sm:inline">{mainMenuTitle}</span>
            </Link>

            {/* 主导航 - 仅在PC端显示 */}
            <nav className="hidden sm:flex flex-wrap justify-center">
              {mainLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="px-3 py-1 my-1.5 hover:text-white/80 transition-colors text-sm sm:text-base font-bold"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-wrap items-center mb-2 sm:mb-0">
            {/* 其他导航 - 仅在PC端显示 */}
            <nav className="hidden sm:flex flex-wrap justify-center gap-x-4 sm:gap-x-6">
              {otherLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="px-3 py-1 my-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-sm sm:text-base"
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
