import { useState } from "react";

function Condition(){
    const [isLoggedIn, setIsloggedIn] = useState<boolean>(false);

    return(
        <div className="p-6">

            <h1 className="text-2xl font-bold mb-4"> Auth Demonstration</h1>

            {
                isLoggedIn ? (
                    <div className="p-4 bg-green-100 rounded">
                        <h2 className="text-lg font-semibold"> Welcome Back</h2>
                    <button onClick={()=> setIsloggedIn(false)} className="mt-3 px-4 py-2 bg-red-500 text-white rounded"> Logout </button>
                    
                    </div>
                ):(
                    <div className="p-4 bg-gray-100 rounded">
                        <h2> Please Login</h2>

                        <button onClick={()=> setIsloggedIn(true)} className="mt-3 px-4 py-2 bg-blue text-white rounded">
                            Login
                        </button>
                    </div>
                )
            }
        </div>
    );
}

export default Condition;