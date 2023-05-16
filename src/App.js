import { useState } from "react";
import "./App.css";
import FoodForm from "./components/FoodForm";
import Footer from "./components/Footer";
import FoodReview from "./components/FoodReview";
import Header from "./components/Header";

const DUMMY_REVIEWS = [
  {
    id: "e1",
    restaurantName: "McDonalds",
    restaurantAddress: "123 Mcdonalds Avenue, Boston, MA",
    webSiteLink: "https://www.mcdonalds.com/us/en-us.html",
    dateVisited: "Jan 1st, 2023",
    typeOfMealHad: "Lunch",
    reccommendToFriend: "Yes",
    ratingOutOfTen: "9.6",
    favoritedRestaurant: true,
  },
  {
    id: "e2",
    restaurantName: "Pizza Hut",
    restaurantAddress: "999 Pizza Drive, Bismarck, North Dakota",
    webSiteLink: "https://www.pizzahut.com/",
    dateVisited: "Jan 2nd, 1847",
    typeOfMealHad: "Dinner",
    reccommendToFriend: "No",
    ratingOutOfTen: "4.3",
    favoritedRestaurant: false,
  },
  {
    id: "e3",
    restaurantName: "Noodle Market",
    restaurantAddress: "455 Noodle Boulevard, Cambridge, MA",
    webSiteLink: "https://www.noodlemarket.net/menu",
    dateVisited: "Feb 8th, 2020",
    typeOfMealHad: "Breakfast",
    reccommendToFriend: "No",
    ratingOutOfTen: "4.1",
    favoritedRestaurant: false,
  },
];

function App() {
  const [foodList, setFoodList] = useState(DUMMY_REVIEWS);
  const [restaurantName, setRestaurantName] = useState("");
  const [restaurantAddress, setRestaurantAddress] = useState("");
  const [webSiteLink, setWebsiteLink] = useState("");
  const [dateVisited, setDateVisited] = useState("");
  const [typeOfMealHad, setTypeOfMealHad] = useState("");
  const [reccommendToFriend, setReccomendToFriend] = useState("");
  const [ratingOutOfTen, setRatingOutOfTen] = useState("");

  const handleNameChange = (event) => {
    setRestaurantName(event.target.value);
    console.log(event.target.value);
  };

  const handleAddress = (event) => {
    setRestaurantAddress(event.target.value);
    console.log(event.target.value);
  };

  const handleWebLink = (event) => {
    setWebsiteLink(event.target.value);
    console.log(event.target.value);
  };

  const handleDateVisited = (event) => {
    setDateVisited(event.target.value);
    console.log(event.target.value);
  };

  const handleTypeOfMeal = (event) => {
    setTypeOfMealHad(event.target.value);
    console.log(event.target.value);
  };

  const handleReccommend = (event) => {
    setReccomendToFriend(event.target.value);
    console.log(event.target.value);
  };
  const handleRating = (event) => {
    setRatingOutOfTen(event.target.value);
    console.log(event.target.value);
  };

  const addReview = () => {
    const newFoodReviewList = {
      id: foodList.length === 0 ? 1 : foodList[foodList.length - 1].id + 1,
      restaurantName: restaurantName,
      restaurantAddress: restaurantAddress,
      webSiteLink: webSiteLink,
      dateVisited: dateVisited,
      typeOfMealHad: typeOfMealHad,
      reccommendToFriend: reccommendToFriend,
      ratingOutOfTen: ratingOutOfTen,
      favoritedRestaurant: false,
    };
    setFoodList([...foodList, newFoodReviewList]);
  };

  const deleteReview = (id) => {
    setFoodList(foodList.filter((review) => review.id !== id));
  };

  const starRestaurant = (id) => {
    setFoodList(
      foodList.map((review) => {
        if (review.id === id) {
          return { ...review, favoritedRestaurant: true };
        } else {
          return review;
        }
      })
    );
  };

  const unStarRestaurant = (id) => {
    setFoodList(
      foodList.map((review) => {
        if (review.id === id) {
          return { ...review, favoritedRestaurant: false };
        } else {
          return review;
        }
      })
    );
  };

  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <FoodForm
        handleNameChange={handleNameChange}
        handleAddress={handleAddress}
        handleWebLink={handleWebLink}
        handleDateVisited={handleDateVisited}
        handleTypeOfMeal={handleTypeOfMeal}
        handleReccommend={handleReccommend}
        handleRating={handleRating}
        addReview={addReview}
      />
      <div className="foodList">
        {foodList.map((review) => {
          return (
            <div>
              <FoodReview
                id={review.id}
                restaurantName={review.restaurantName}
                restaurantAddress={review.restaurantAddress}
                phoneNumber={review.phoneNumber}
                webSiteLink={review.webSiteLink}
                dateVisited={review.dateVisited}
                typeOfMealHad={review.typeOfMealHad}
                reccommendToFriend={review.reccommendToFriend}
                ratingOutOfTen={review.ratingOutOfTen}
                deleteReview={deleteReview}
                starRestaurant={starRestaurant}
                unStarRestaurant={unStarRestaurant}
                favoritedRestaurant={review.favoritedRestaurant}
              />
            </div>
          );
        })}
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
