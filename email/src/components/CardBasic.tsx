type Props = {
    title: string
    description: string
}

const CardBasic = ({title, description}: Props) => {
  return (
    <div className="flex flex-col bg-black rounded-lg space-y-1 p-2 justify-start items-center">
        <div className="text-2xl text-white">
            {title}
        </div>
        <div className="text-lg text-white">
            {description}
        </div>
    </div>
  )
}

export default CardBasic