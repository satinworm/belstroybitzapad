import { NavLink } from "react-router-dom";
import clsx from "clsx";

type Props = {
  link: string;
  label: string;
};

export const HeaderLink = (props: Props) => {
  const { link, label } = props;

  return (
    <NavLink
      className={({ isActive }) =>
        clsx(
          "text-lg border-b-2 pb-2",
          isActive
            ? "text-accent font-medium border-b-accent"
            : "text-white font-base border-b-transparent"
        )
      }
      to={link}
      end
    >
      {label}
    </NavLink>
  );
};
