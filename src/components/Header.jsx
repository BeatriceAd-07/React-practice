//Destructuring props
function Header({name, role, email, university}) {
    return (
       <header>
            <h1>{name}</h1>
            <p>{role}</p>
            <p>{email}</p>
       </header>
    )
 }
 export default Header;


