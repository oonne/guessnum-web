'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { MobileMenuProps } from './types';

/**
 * 移动端菜单组件
 * 显示移动端下拉菜单内容
 */
const MobileMenu = ({ isOpen, mainLinks, otherLinks, mainMenuTitle }: MobileMenuProps) => {
  const pathname = usePathname();

  useEffect(() => {
    // 当路径改变或菜单状态变化时控制body滚动
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, pathname]);

  if (!isOpen) return null;

  return (
    <div className="sm:hidden fixed inset-0 top-16 bg-gradient-to-b from-[#2c3338] to-[#1a1d21] z-40 overflow-y-auto shadow-xl border-t border-white/10 backdrop-blur-sm">
      <div className="px-4 py-6 space-y-6">
        <div className="bg-white/5 rounded-lg p-4 shadow-inner">
          <h3 className="text-white font-semibold mb-4 border-b border-white/20 pb-2">
            {mainMenuTitle}
          </h3>
          <nav className="flex flex-col space-y-4">
            {mainLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="px-3 py-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors text-white shadow-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="bg-white/5 rounded-lg p-4 shadow-inner">
          <h3 className="text-white font-semibold mb-4 border-b border-white/20 pb-2">其他功能</h3>
          <nav className="flex flex-col space-y-4">
            {otherLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="px-3 py-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors text-white shadow-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
