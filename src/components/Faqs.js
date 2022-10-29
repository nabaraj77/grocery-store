// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function Faqs() {
//   const [categories, setCategories] = useState();
//   const getCategoriesList = () => {
//     axios({
//       method: "get",
//       url: `https://uat.ordering-farmshop.ekbana.net/api/v4/category`,
//       // params: {
//       //   allProduct: 1,
//       // },
//       headers: {
//         "Api-key": process.env.REACT_APP_API_KEY,
//         "Warehouse-Id": 1,
//       },
//     })
//       .then((response) => {
//         console.log(response.data.data);
//       })
//       .catch((error) => console.error(`Error: ${error}`));
//   };
//   useEffect(() => {
//     getCategoriesList();
//   }, []);

//   return <div>Faqs</div>;
// }

// export default Faqs;
