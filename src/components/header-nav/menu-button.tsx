'use client';

import { MobileMenuButtonProps } from './types';

/**
 * 移动端菜单按钮组件
 * 控制移动菜单的展开与收起
 */
const MenuButton = ({ isOpen, toggleMenu }: MobileMenuButtonProps) => {
  return (
    <button
      onClick={toggleMenu}
      className="sm:hidden flex flex-col justify-center items-center w-10 h-10"
      aria-label={isOpen ? '关闭菜单' : '打开菜单'}
      aria-expanded={isOpen}
    >
      <span
        className={`block w-6 h-0.5 bg-white mb-1.5 transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
      ></span>
      <span
        className={`block w-6 h-0.5 bg-white mb-1.5 transition-opacity ${isOpen ? 'opacity-0' : 'opacity-100'}`}
      ></span>
      <span
        className={`block w-6 h-0.5 bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
      ></span>
    </button>
  );
};

export default MenuButton;
