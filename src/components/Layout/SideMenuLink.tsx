import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { SideMenuUrlsType } from "./sideMenuUrls";

type Props = {
  LinkDetail: SideMenuUrlsType;
};

const SideMenuLink = ({ LinkDetail }: Props) => {
  const pathname = usePathname();
  const activeMenu = "bg-primary-500 text-white";
  return (
    <Link href={LinkDetail.url}>
      <li
        className={` text-base 3xl:text-lg duration-150 py-3 px-5 mb-2 rounded-md ${
          pathname === LinkDetail.url
            ? activeMenu
            : "hover:bg-primary-500 hover:text-white"
        } `}
      >
        {LinkDetail.name}
      </li>
    </Link>
  );
};

export default SideMenuLink;
