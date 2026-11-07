import { NavLink } from 'react-router-dom'

export default function TopBar(){
    return (
        <div className="flex justify-between">
            <h1>Booklog</h1>
            <div>
                <NavLink to="/" end className={({ isActive }) => isActive ? 'text-primaria border-b-2 border-primaria' : 'text-texto-2'}> Reviews </NavLink>
                <NavLink to="/Minhalista" end className={({ isActive }) => isActive ? 'text-primaria border-b-2 border-primaria' : 'text-texto-2'}> Minha Lista</NavLink>
            </div>
            <div>
                <button><a href="/login">Entrar</a></button>
            </div>
        </div>
    )
}