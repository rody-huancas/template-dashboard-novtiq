import { cn } from "@/utils/general.util";
import { Input } from "@/components/ui/input/Input";
import { Button } from "@/components/ui/button/Button";
import { useThemeStore } from "@/store/theme/useTheme";
import { RiMenuUnfold2Fill, RiMenuUnfold3Fill } from "react-icons/ri";

const Header = () => {
  const menuIsOpen = useThemeStore( state => state.menuIsOpen );
  const setMenuIsOpen = useThemeStore( state => state.setMenuIsOpen );

  return (
    <header className={cn("bg-light-100 h-20 flex items-center fixed top-0 left-0 w-full shadow-sm z-10")}>
      <div className="w-content flex items-center justify-center">
        <p className="text-secondary font-black text-3xl">
          Nov<span className="text-primary">tiq</span>
        </p>
      </div>

      <div className="flex items-center justify-between flex-1 px-7">
        <div className="flex items-center gap-10">
          <Button size="icon" variant="ghost" onClick={() => setMenuIsOpen(!menuIsOpen)}>
            { menuIsOpen ? <RiMenuUnfold2Fill size={20} /> : <RiMenuUnfold3Fill size={20} /> }
          </Button>
          <Input placeholder="Buscar..." variant="flat" />
        </div>

        <div className="flex items-center gap-5">
          <span className="p-3 rounded-full bg-dark-200 text-light-100">RH</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
