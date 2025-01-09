"use client"

import { PAGE_BREAD_CRUMBS } from "@/constants/pages"
import { usePaths } from "@/hooks/use-nav"
import { Menu } from "lucide-react"
import Sheet from "../sheet"

type Props = {
    slug: string
}

const NavigationBar = ({slug}: Props) => {
    const {page} = usePaths();
    const currentPage = PAGE_BREAD_CRUMBS.includes(page) || page == slug;
  return (
    <div>
        {
            currentPage && <div className="flex flex-col">
                <div className="flex gap-x-3 lg:gap-x-5 justify-end">
                    <span className="lg:hidden flex items-center flex-1 gap-x-2">
                        <Sheet
                            trigger={<Menu />}
                            className="lg:hidden"
                        >
                            <div>
                                something
                            </div>
                        </Sheet>
                    </span>

                </div>
            </div>
        }
    </div>
  )
}

export default NavigationBar