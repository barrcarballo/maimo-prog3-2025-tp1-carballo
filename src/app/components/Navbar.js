import Image from "next/image";

const Navbar = ({title, year}) => {
  return (
    // el JSX solo puede tener un elemento padre
      <header>
      <div className="nav_container">
        <div className="logo_container">
          <Image 
                src="/assets/foodiegoodieCanvas.png" 
                width={300} 
                height={200} 
                alt="logo" 
                />
        </div>
        <nav>
            <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#">CATEGORIES</a></li>
                <li><a href="#">ABOUT</a></li>
            </ul>
            <div>{title} {year}</div>
        </nav>
      </div>
      </header>
  );
};

export default Navbar 