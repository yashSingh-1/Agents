type Props = {
    title: string
    description: string
}

const CardBasic = ({title, description}: Props) => {
  return (
    <div className="flex flex-col justify-center items-center bg-slate-900 rounded-lg space-y-1 p-2 min-h-[120px] max-h-[200px] max-w-[300px] overflow-hidden">
        <div className="text-2xl text-white border-b font-bold">
            {title}
        </div>
        <div className="text-md text-white w-[90%]">
            {description}
        </div>
    </div>
  )
}

export default CardBasic