import React from "react";

const FoodReview = (props) => {
  return (
    <div className="reviewsContainer">
      <div className="reviewBtnsContainer">
        <button onClick={() => props.deleteReview(props.id)}> Delete Review </button>


      </div>
      <div className="foodReviewsContainer">
        <div className="reviewDetailsContainer">
          <h1 className="restaurantName">
            <i> Restaurant Name: </i>
            {props.restaurantName}
          </h1>
          <h2 className="restaurantAddress">
            <i> Restaurant Address: </i>
            {props.restaurantAddress}
          </h2>
          <h2 className="phoneNumber">
            <i> Phone Number: </i>
            {props.phoneNumber}
          </h2>
          <h2 className="webSiteLink">
            <i> Website Link: </i>
            {props.webSiteLink}
          </h2>
          <h2 className="dateVisited">
            <i> Date Visited: </i>
            {props.dateVisited}
          </h2>
          <h2 className="typeOfMealHad">
            <i> Type of Meal Had: </i>
            {props.typeOfMealHad}
          </h2>
          <h2 className="reccommendToFriend">
            <i> Reccommend to a Friend?: </i>
            {props.reccommendToFriend}
          </h2>
          <h2 className="ratingOutOfTen">
            <i> Rating Out of 10: </i>
            {props.ratingOutOfTen}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default FoodReview;
