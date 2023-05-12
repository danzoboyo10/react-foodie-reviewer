import React from "react";

const FoodReview = (props) => {
  return (
    <div className="reviewsContainer">
      

        <div
        className="favoriteRestaurant"
        // style={{ backgroundColor: props.favoritedRestaurant ? "green" : "red" }}
        style={{ backgroundImage: props.favoritedRestaurant ? 'url("https://i.pinimg.com/originals/66/9f/9e/669f9e9981a7cb4bfe804c72fb79dbdc.gif")' :'url("https://i.pinimg.com/originals/66/9f/9e/669f9e9981a7cb4bfe804c72fb79dbdc.gif")'}}
      ></div>
        <div className="reviewDetailsContainer">

          <h1 className="restaurantName">
            <i> RESTAURANT NAME: </i>
            {props.restaurantName}
          </h1>
          <h2 className="restaurantAddress">
            <i> RESTAURANT ADDRESS: </i>
            {props.restaurantAddress}
          </h2>
          <h2 className="phoneNumber">
            <i> RESTAURANT PHONE #: </i>
            {props.phoneNumber}
          </h2>
          <h2 className="webSiteLink">
            <i> WEBSITE LINK: </i>
            {props.webSiteLink}
          </h2>
          <h2 className="dateVisited">
            <i> DATE VISITED: </i>
            {props.dateVisited}
          </h2>
          <h2 className="typeOfMealHad">
            <i> TYPE OF MEAL HAD: </i>
            {props.typeOfMealHad}
          </h2>
          <h2 className="reccommendToFriend">
            <i>RECCOMMEND TO A FRIEND?: </i>
            {props.reccommendToFriend}
          </h2>
          <h2 className="ratingOutOfTen">
            <i> RATING OUT OF 10: </i>
            {props.ratingOutOfTen}
          </h2>
          
          <div className="reviewBtnsContainer">
        <button className="faveRestaurantBtn" onClick={() => props.starRestaurant(props.id)}>
          Favorite Restaurant
        </button>
        <button className = "deleteReviewBtn" onClick={() => props.deleteReview(props.id)}>
          Delete Review
        </button>
       
        
      </div>
        </div>
      </div>
  );
};

export default FoodReview;
