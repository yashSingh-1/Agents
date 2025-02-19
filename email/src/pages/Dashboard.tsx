import Sidebar from "../components/Sidebar"

const Dashboard = () => {
  return (
    <div className="flex justify-start">
        <div className="w-fit">
            <Sidebar />
        </div>
        <div className="">
            Maincomponent
        </div>
        <div className="">
            Email
        </div>
    </div>
  )
}

export default Dashboard