import React, { use } from "react";
import Collection from "./Collection";

const Collections = ({ collectionsPromise }) => {
  const perfumes = use(collectionsPromise);
  console.log(perfumes);
  return (
    <div>
      <div className="grid grid-cols-2 gap-y-10">
        {perfumes.map((perfume) => (
          <Collection perfume={perfume}></Collection>
        ))}
      </div>
    </div>
  );
};

export default Collections;
