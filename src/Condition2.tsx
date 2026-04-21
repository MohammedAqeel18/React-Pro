import { useState } from "react";

function Condition2(){
    const[loading,setLoading] = useState<boolean>(true);
    const [error,setError] = useState<string| null>(null);

    return(
        <div className="p-6">
            <h1 className="text-2xl font-bold"> Data Fetch UI</h1>

            {loading && <p> Loading... </p>}
            {!loading && error && (
                <p className="text-red-500"> Error :{error}</p>
            )}

            {!loading && !error && (
                <p className="text-green-500"> Data Loaded Successfully</p>
            )}

            <button onClick={()=>{
                setLoading(false);
                setError(null);
            }} className="mt-4 px-4 py-2 bg-blue-500 text-white">
                Simulate Success
                 </button>

                 <button onClick={()=> {setLoading(false); setError("Something went wrong")} } className="mt-4 ml-2 px-4 py-2 bg-red-500 text-white">
                    Simulate Error
                 </button>

        </div>
    );
}

export default Condition2;