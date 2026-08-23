//Destructuring props
function Header({name, role, email, university}) {
    return (
       <header>
            <h1>{name}</h1>
            <p>{role}</p>
            <p>{email}</p>

           
            {role === "UI/UX Designer" && (
               <p>Designs user experiences</p>
            )}
       </header>
       
    );
    
 }
 export default Header;


