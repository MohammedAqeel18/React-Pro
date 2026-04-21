const users = [
    { id:1 , name:"Aboobakr"},
    {id:2 , name:"Umar"},
    {id:3, name:"Uthman"},
    {id:4, name:"Ali"}
];

function List(){
    return(
        <div>
            <h1> List of Users </h1>

            <ul>
             {users.map((user) => (
                <li key={user.id}>
                <h3> Name: {user.name}</h3>    
                </li>
             ))}   
            </ul>
        </div>
    )
}

export default List;