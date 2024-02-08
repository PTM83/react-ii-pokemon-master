import { NavLink } from 'react-router-dom'

export const NavLinkPokemon = ({ to, children, ...props }) => {

    return (
        <NavLink
        {...props}
        className = { ({isActive}) => {
            return isActive ? 'is-active' : undefined
        }}
        to = {to}
        >
            {children}
        </NavLink>
    )
}