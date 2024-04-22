import AllRetsept from "../components/AllRetsept"
import { useFetch } from "../hooks/useFetch"

import { UseCollection } from "../hooks/useCollection"


export default function Home() {
  const {data : retsepts} = UseCollection();
  console.log(retsepts);

    return (
        <div className="max-w-screen-lg w-full mx-auto px-3">
        {retsepts && <AllRetsept retsepts={ retsepts } />}
        </div>
    )
}