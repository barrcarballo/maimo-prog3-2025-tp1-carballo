import Image from "next/image";

const RecipeCard = ({name, image}) => {
  return (
   <div className="recipe_card">
  <div style={{ width: '100%', height: '180px', position: 'relative' }}>
    <Image 
      src={image} 
      alt={name}
      fill
      style={{ objectFit: 'cover' }}
    />
  </div>
<h3>{name}</h3>
  <a href={"/recipe?id=${id}"}>
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
      <path fill="#000" d="M7 12h4V8h1v4h4v1h-4v4h-1v-4H7zm4.5-9a9.5 9.5 0 0 1 9.5 9.5a9.5 9.5 0 0 1-9.5 9.5A9.5 9.5 0 0 1 2 12.5A9.5 9.5 0 0 1 11.5 3m0 1A8.5 8.5 0 0 0 3 12.5a8.5 8.5 0 0 0 8.5 8.5a8.5 8.5 0 0 0 8.5-8.5A8.5 8.5 0 0 0 11.5 4" strokeWidth="0.5" stroke="#000"/>
    </svg>
  </a>
</div>
  );
};

export default RecipeCard;
