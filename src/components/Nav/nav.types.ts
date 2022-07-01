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
  onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined;
}

export interface NavProps {
  links: {
    hash: boolean;
    modal: boolean;
    to: string;
    text: string;
  }[];
}
