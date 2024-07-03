import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';

function Header() {
  return (
    <header className="bg-yellow-500">
      <Link tp="/">Fast React Pizza Co.</Link>
      <SearchOrder />
      <p>Rahimah</p>
    </header>
  );
}

export default Header;
