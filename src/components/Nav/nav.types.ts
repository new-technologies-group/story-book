export interface NavProps {
  links: JSX.Element[];
}
export interface BaseNavProps {
  sticky: boolean;
}

export interface SideNavProps {
  active: boolean;
}

export interface NavLinkProps {
  hash?: boolean;
  modal?: boolean;
  to: string;
}
