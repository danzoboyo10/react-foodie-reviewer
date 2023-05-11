import React from "react";

const FoodForm = (props) => {
  return (
    <div className="addFoodReview">
      <div className="foodFormDirections">* Give Your Honest Food Review *</div>
      <input
        type="text"
        name="restaurant name"
        placeholder="Enter a Restaurant Name"
        onChange={props.handleNameChange}
      />
      <input
        type="text"
        name="Address"
        placeholder="Enter the Restaurant's Address"
        onChange={props.handleAddress}
      />
      <input
        type="text"
        name="Phone Number"
        placeholder="Enter the Restaurant's Phone #"
        onChange={props.handlePhoneNum}
      />
      <input
        type="text"
        name="Website Link"
        placeholder="Enter the Restaurant's Website Link"
        onChange={props.handleWebLink}
      />
      {/* <input
        type="text"
        name="Restaurant Picture"
        placeholder="Enter a Picture of the Restaurant"
        onChange={props.handleWebLink}
      /> */}
       <input
        type="text"
        name="Date Visited Link"
        placeholder="Enter the Date You Visited the Restaurant"
        onChange={props.handleDateVisited}
      />
       <input
        type="text"
        name="Type of Meal"
        placeholder="Enter the type of Meal Had (Breakfast, Lunch, Dinner)"
        onChange={props.handleTypeOfMeal}
      />
       <input
        type="text"
        name="Reccomend to Friend"
        placeholder="Would Reccomend to Friend (YES/NO)"
        onChange={props.handleReccommend}
      />
       <input
        type="text"
        name="Rating out of 10"
        placeholder="Rate the Restaurant (0-10)"
        onChange={props.handleRating}
      />
      <button className="addReviewBtn" onClick={props.addReview}>
        Submit Review

      </button>

    </div>
  );
};

export default FoodForm;
