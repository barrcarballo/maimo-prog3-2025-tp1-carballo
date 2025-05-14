import Navbar from "@/app/components/Navbar"; // todos los componentes deben tener mayus
import Footer from "@/app/components/Footer";
import HomeContainer from "@/app/components/HomeContainer";


export default function Home() {
  return (  // esto es JSX, no HTML
    <div>
      <Navbar/> 
      <HomeContainer/>
      <Footer/>
    </div>
  );
}
