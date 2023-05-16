import React from "react";

const FoodReview = (props) => {
  return (
    <div className="reviewDetailsContainer">
      <div
        className="favoriteRestaurant"
        // style={{ backgroundColor: props.favoritedRestaurant ? "green" : "red" }}
        style={{
          backgroundImage: props.favoritedRestaurant
            ? 'url("https://i.pinimg.com/originals/66/9f/9e/669f9e9981a7cb4bfe804c72fb79dbdc.gif")'
            : 'url("https://t3.ftcdn.net/jpg/01/75/03/46/360_F_175034602_dW31V5QsnyY3oBsbcoMFtNhNlgRWdAA6.jpg")',
        }}
      ></div>

      <h1 className="restaurantName">
        <i> RESTAURANT NAME: </i>
        {props.restaurantName}
      </h1>

      <h2 className="restaurantAddress">
        <i> RESTAURANT ADDRESS: </i>
        {props.restaurantAddress}
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
        <button onClick={() => props.starRestaurant(props.id)}>
          Favorite Restaurant
        </button>

        <button onClick={() => props.unStarRestaurant(props.id)}>
          UnFavorite Restaurant
        </button>
        <button onClick={() => props.deleteReview(props.id)}>
          Delete Review
        </button>
      </div>
    </div>
  );
};

export default FoodReview;
