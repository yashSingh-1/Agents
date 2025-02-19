import search from "../assets/search.svg"

const Searchbar = () => {
  return (
    <div className="flex rounded-2xl border px-2 justify-between w-[250px] my-2 overflow-hidden">
        <div>
            <input type="text" className="p-2 outline-none" placeholder="Search a Mail" />
        </div>
        <img src={search} alt="Search Icon" className="w-[20px]" />
    </div>
  )
}

export default Searchbar