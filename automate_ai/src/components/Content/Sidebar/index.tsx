"use client";
import { usePaths } from "@/hooks/use-nav";

type Props = {
  slug: string;
};

const Sidebar = ({ slug }: Props) => {
  const { page, pathname } = usePaths();
  return (
    <div
      className="w-[250px] h-screen border-2 radial fixed left-0 lg:inline-block
    border-[#545454] bg-gradient-to-b from-[#7688DD] via-[#171717]
    to-[#7688DD] hidden botoom-0 top-0 m-3 rouded-3xl overflow-hidden"
    >
      <div className="flex flex-col 
      gap-y-5
       w-full 
       h-full 
       p-3 
       bg-[#0e0e0e] 
       bg-opacity-90 
       bg-clip-padding 
       backdrop-filter 
       backdrop--blur__safari 
       backdrop-blur-3xl">
        <div className="flex gap-x-2 items-center p-5 justify-center">
          {/* <LogoSmall /> */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
