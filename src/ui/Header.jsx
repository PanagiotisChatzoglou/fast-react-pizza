import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

function Header() {
  return (
    <header className="font-pizza flex items-center justify-between border-b bg-yellow-500 px-4 py-3 uppercase sm:px-10">
      <Link to="/" className="tracking-widest">
        fast react pizza co{' '}
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
