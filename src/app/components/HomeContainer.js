import RecipesGrid from "@/app/components/RecipesGrid";
import Image from "next/image";

const HomeContainer = () => {
  return (
    <div className="home_container">
      <section className="hero">
            <div className="hero-content">
                <h1>¡Bienvenido a nuestra tienda!</h1>
                <p>Descubre las mejores recetas para sorpender a tus amichos</p>
            </div>
            <div className="hero-image">
               <Image 
                     src="/assets/foodiegoodieGirl-04.png" 
                     width={500} 
                     height={200} 
                     alt="banner" 
                     style={{ width: '90%', marginTop: '70px', marginLeft: '10px' }}
                     />
            </div>
            </section>
      <section className="recipes_container">
      <h2>BEST RECIPES</h2>
      <RecipesGrid />
      </section>
    </div>
  );
};

export default HomeContainer;
