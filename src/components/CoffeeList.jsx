import { useState } from "react";
import Card from "./Card";
import AvailableNowButton from "./AvailableNowButton";
import AllProductsButton from "./AllProductsButton";

const CoffeeList = () => {
  const [coffeeData, setCoffeeData] = useState([]);
  const [showAll, setShowAll] = useState(true); 

  fetch(
    "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json",
  )
    .then((response) => response.json())
    .then((data) => {
      setCoffeeData(data);
    })

    .catch((error) => {
      console.log(error);
    });

  return (
    <div className="md:my-5 sm:my-20">
      <div className="flex justify-center gap-5 mt-3 text-[14px] font-semibold ">
        <AllProductsButton showAll={showAll} setShowAll={setShowAll} />
        <AvailableNowButton showAll={showAll} setShowAll={setShowAll} />
        
      </div>

      <div className="md:grid grid-cols-3 gap-8">
        {showAll ? (
          coffeeData.map((c) => (
          <Card key={c.id} c={c} />
        ))
        ) : (
          coffeeData.map((c) => (
            c.available && (
              <Card key={c.id} c={c} />
            )
          ))
        )}
      </div>
    </div>
  );
};

export default CoffeeList;
