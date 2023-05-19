import React, { useState } from "react";
import Modal from "react-modal";

const FoodReview = (props) => {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    setShowModal(true);
  };
  const handleConfirmDelete = () => {
    setShowModal(false);
  };

  const handleCancelDelete = () => {
    setShowModal(false);
  };
  const modalStyles = {
    content: {
      backgroundColor: "black",
      color: "whiteSmoke",
      width: "420px",
      height: "200px",
      margin: "auto",
      border: "solid",
      borderColor: "white-smoke",
      textAlign: "center",
    },
  };
  return (
    <div className="reviewDetailsContainer">
      <div
        className="favoriteRestaurant"
        style={{
          backgroundImage: props.favoritedRestaurant
            ? 'url("https://i.pinimg.com/originals/66/9f/9e/669f9e9981a7cb4bfe804c72fb79dbdc.gif")'
            : 'url("https://t3.ftcdn.net/jpg/01/75/03/46/360_F_175034602_dW31V5QsnyY3oBsbcoMFtNhNlgRWdAA6.jpg")',
        }}
      ></div>

      <h1 className="restaurantName">
        <i> Restaurant Name: </i>
        {props.restaurantName}
      </h1>

      <h2 className="restaurantAddress">
        <i> Restaurant Address: </i>
        {props.restaurantAddress}
      </h2>

      <h2 className="webSiteLink">
        <i>
          {" "}
          <b> Website Link: </b>{" "}
        </i>
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
        <i>Reccommend to a Friend?: </i>
        {props.reccommendToFriend}
      </h2>
      <h2 className="ratingOutOfTen">
        <i> Rating Out of 10: </i>
        {props.ratingOutOfTen}
      </h2>

      <div className="reviewBtnsContainer">
        <button onClick={() => props.starRestaurant(props.id)}>
          Favorite Restaurant
        </button>

        <button onClick={() => props.unStarRestaurant(props.id)}>
          Unfavorite Restaurant
        </button>
        <button onClick={handleDelete}>Delete Review</button>
        <Modal
          isOpen={showModal}
          onRequestClose={handleCancelDelete}
          style={modalStyles}
        >
          <h2 className="areYouSure">
            {" "}
            Are you sure you want to delete this review?"{" "}
          </h2>
          <button
            className="modalYesBtn"
            onClick={() => {
              handleConfirmDelete();
              props.deleteReview(props.id);
            }}
          >
            {" "}
            Yes{" "}
          </button>
          <button className="modalNoBtn" onClick={handleCancelDelete}>
            {" "}
            No{" "}
          </button>
        </Modal>
      </div>
    </div>
  );
};

export default FoodReview;
