import { useEffect, useState } from "react";

const ResturantsMenu = () => {
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.4110914&lng=72.82603019999999&restaurantId=47594&catalog_qa=undefined&submitAction=ENTER"
      );

      const json = await data.json();
      console.log(json);

      setMenuList(json?.data);
    })();
  }, []);

  const {
    city,
    name,
    id,
    costForTwoMessage,
    cuisines,
    parentId,
    cloudinaryImageId,
  } = menuList?.cards[0]?.card?.card?.info;

  const{itemCards} = menuList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards

  return (
    <div className="resto-menu">
      
          <h1>{city}</h1>

          <h3>{name}</h3>
          <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
          

          <ul>
            {itemCards.map((resitem) =>{
                <li key={resitem?.card?.info?.id}>{resitem?.card?.info?.name}</li>
            })}
          </ul>
        
    </div>
  );
};

export default ResturantsMenu;
