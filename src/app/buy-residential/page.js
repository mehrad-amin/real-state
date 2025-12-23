import BuyResidentialsPage from "@/components/templates/BuyResidentialsPage";
import React from "react";

const BuyResidentials = async ({ searchParams }) => {
  const params = await searchParams;

  const res = await fetch("http://localhost:3000/api/profile", {
    cache: "no-store",
  });
  const data = await res.json();
  if (data.error) return <h3>مشکلی به وجود امده است </h3>;
  let finalData = data.data;
  if (params.category) {
    finalData = finalData.filter((item) => item.category === params.category);
  }
  return <BuyResidentialsPage data={finalData} />;
};

export default BuyResidentials;
