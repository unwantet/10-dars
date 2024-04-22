import AllRetsept from "../components/AllRetsept"

import { UseCollection } from "../hooks/useCollection"


export default function Home() {
  const {data : retsepts , isPending} = UseCollection();

  console.log(retsepts)

  console.log(isPending)

  if(isPending) return <div className="flex justify-center items-center h-screen">
                          <span className="loading loading-bars w-24 h-24"></span>
                        </div>
    return (
        <div className="max-w-screen-lg w-full mx-auto px-3">
        {retsepts && <AllRetsept retsepts={ retsepts } />}
        </div>
    )
}