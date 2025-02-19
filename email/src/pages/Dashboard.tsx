import Sidebar from "../components/Sidebar"

const Dashboard = () => {
  return (
    <div className="flex justify-start">
        <div className="">
            <Sidebar />
        </div>
        <div className="w-1/3">
            Maincomponent
        </div>
        <div className="w-1/3">
            Email
        </div>
    </div>
  )
}

export default Dashboard