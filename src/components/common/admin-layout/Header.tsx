import { Link, useNavigate } from "react-router-dom";
/* Components */
import { Input } from "@/components/ui/input/Input";
import { Button } from "@/components/ui/button/Button";
import { Dropdown } from "@/components/ui/dropdown/Dropdown";
/* Utils */
import { cn } from "@/utils/general.util";
/* Store */
import { useThemeStore } from "@/store/theme/useTheme";
/* Icons */
import { RiMenuUnfold2Fill, RiMenuUnfold3Fill } from "react-icons/ri";
import { RiUser3Line, RiSettings3Line, RiLogoutBoxRLine } from "react-icons/ri";

const Header = () => {
  const menuIsOpen = useThemeStore(state => state.menuIsOpen);
  const setMenuIsOpen = useThemeStore(state => state.setMenuIsOpen);

  const navigate = useNavigate();

  const dropdownOptions = [
    {
      label: "Perfil",
      icon: <RiUser3Line />,
      onClick: () => console.log("Profile clicked")
    },
    {
      label: "Ajustes",
      icon: <RiSettings3Line />,
      onClick: () => console.log("Settings clicked")
    },
    {
      label: "Cerrar Sesión",
      icon: <RiLogoutBoxRLine />,
      onClick: () => navigate("/login")
    }
  ];

  return (
    <header className={cn("bg-light-100 h-20 flex items-center fixed top-0 left-0 w-full shadow-sm z-40")}>
      <Link to="/" className="w-content flex items-center justify-center p-14">
        <img src="/novtiq.svg" alt="Novtiq Logo" />
      </Link>

      <div className="flex items-center justify-between flex-1 px-7">
        <div className="flex items-center gap-10">
          <Button size="icon" variant="ghost" onClick={() => setMenuIsOpen(!menuIsOpen)}>
            {menuIsOpen ? <RiMenuUnfold2Fill size={20} /> : <RiMenuUnfold3Fill size={20} />}
          </Button>
          <Input placeholder="Buscar..." variant="flat" />
        </div>

        <div className="flex items-center gap-5">
          <Dropdown
            trigger={
              <button className="p-3 rounded-full bg-dark-200 text-light-100 hover:bg-dark-300 transition-colors">
                RH
              </button>
            }
            options={dropdownOptions}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;