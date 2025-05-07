import { useEffect, useState } from "react"


const Demo = () => {
  const [count, setCount] = useState(0)
  const handlecliclkincrement = () => {
    setCount(count + 2);
  };
  useEffect(() => {
    console.log("handle click increment called");
  }, [handlecliclkincrement]);
  
  const handleclickdecrement = () => {
    setCount(count-2)
  }
    
  return (
    <div className="flex gap-3 items-center justify-center flex-col w-full h-full bg-amber-500 p-3">
      <button onClick={handlecliclkincrement} className="bg-amber-50 w-1/4">
        increment by 2
      </button>
      <button onClick={handleclickdecrement} className="bg-amber-200 w-1/4">
        decrement by 2
      </button>
      {count}
    </div>
  );
}

export default Demo