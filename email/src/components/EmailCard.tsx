import { useState } from "react"

const EmailCard = () => {
    const [value, setValue] = useState();
  return (
    <div className="flex flex-col">
        <div className="flex justify-between">
            <span>
                Inbox
            </span>
            <span>

            </span>
        </div>
    </div>
  )
}

export default EmailCard