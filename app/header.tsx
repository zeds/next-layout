import NavLink from './nav-link';

const header = () => {

  return (
    <header className="border-b p-4">
      <nav className="p-2">
        <ul className="flex items-center space-x-4">
          <li className="">
            <img src="/vercel.svg" className="w-20" />
          </li>
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/about">About</NavLink>
          </li>
          <li>
            <NavLink href="/test">Test</NavLink>
          </li>
          <li>
            <NavLink href="/user">User</NavLink>
          </li>
          <li>
            <NavLink href="/movies">Movies</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default header;