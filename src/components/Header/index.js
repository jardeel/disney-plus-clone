import { Nav, Logo, NavMenu, UserImg } from './styles';

const menuItems = [
  { icon: '/images/home-icon.svg', text: 'Home' },
  { icon: '/images/search-icon.svg', text: 'Search' },
  { icon: '/images/watchlist-icon.svg', text: 'Watchlist' },
  { icon: '/images/original-icon.svg', text: 'Originals' },
  { icon: '/images/movie-icon.svg', text: 'Movies' },
  { icon: '/images/series-icon.svg', text: 'Series' },
];

function Header(){
  const renderMenuItems = () => {
    return menuItems.map((item) => (
      <a key={item.text}>
        <img src={item.icon} alt={item.text} />
        <span>{item.text}</span>
      </a>
    ));
  };


  return (
    <Nav>
      <Logo src='/images/logo.svg' alt='Logo' />
      <NavMenu>
        {renderMenuItems()}
      </NavMenu>
      <UserImg src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"/>
    </Nav>
  )
}

export default Header;
