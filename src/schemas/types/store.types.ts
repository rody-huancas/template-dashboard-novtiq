import { IconType } from "react-icons";

export type MenuProps = {
  name: string;
  path: string;
  icon: IconType;
};

export type MenuItemProps = {
  menu: MenuProps;
};

export type UiState = {
  isOpenModalSearch : boolean;
  isOpenButtonConfig: boolean;

  setToggleModalSearch(value: boolean) : void;
  setToggleButtonConfig(value: boolean): void;
};

export type ThemeState = {
  theme     : boolean;
  menuIsOpen: boolean;

  setTheme     : (theme: boolean) => void;
  setMenuIsOpen: (value: boolean) => void;
};
