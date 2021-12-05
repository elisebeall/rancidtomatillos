import '../css/Nav.css'

const Nav = ({ homeClick }) => {
  return (
    <header className="navbar">
      <h1>Rancid Tomatillos</h1>
      <button onClick={homeClick}>Home</button>
    </header>
  )
}

export default Nav
