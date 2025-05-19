/**
 * 导航链接类型
 */
export type LinkType = {
  href: string;
  label: string;
};

/**
 * 移动菜单按钮属性
 */
export interface MobileMenuButtonProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

/**
 * 移动菜单属性
 */
export interface MobileMenuProps {
  isOpen: boolean;
  mainLinks: LinkType[];
  otherLinks: LinkType[];
  mainMenuTitle?: string;
}

/**
 * 导航客户端组件属性
 */
export interface NavClientProps {
  lang: string;
  mainMenuTitle: string;
  mainLinks: LinkType[];
  otherLinks: LinkType[];
}
