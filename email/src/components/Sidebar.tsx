import { SidebarEvents } from "../constants"
import Searchbar from "./Searchbar"

const Sidebar = () => {
  return (
    <div className="h-screen hidden md:flex flex-col p-2 bg-slate-100">
      <div className="ml-2">
      <Searchbar />
      </div>
      <div>
        {
          SidebarEvents.map((item, index) => (
            <div key={index} className="flex p-2 space-x-2 m-2 border rounded-lg  w-[250px]">
              <img src={item.img} alt={item.name} className="w-[20px]" />
              <div>
                {item.name}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Sidebar