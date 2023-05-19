import React, { useState } from "react";

const FoodForm = (props) => {
  const [formIsOpen, setFormIsOpen] = useState(true);
  function handleCloseOpenClick() {
    setFormIsOpen(!formIsOpen);
  }

  return (
    <>
    
      <button className = "handleCloseOpenBtn" onClick={handleCloseOpenClick}>
        {formIsOpen ? "Close Foodie Review Form" : "Open Foodie Review Form"}
      </button>
      {formIsOpen && (
        <div className="addFoodReviewContainer">
          <div className="foodFormDirections">
            <b>
              <i>
                * REVIEW AND KEEP TRACK OF RESTRAUNTS YOU HAVE BEEN TO BY
                FILLING OUT THE FORM *{" "}
              </i>
            </b>
          </div>
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
            name="Website Link"
            placeholder="Enter the Restaurant's Website Link"
            onChange={props.handleWebLink}
          />
          <input
            type="text"
            name="Reccomend to Friend"
            placeholder="Would Reccomend to Friend (YES/NO)"
            onChange={props.handleReccommend}
          />
          <input
            type="text"
            name="Type of Meal"
            placeholder="Enter the type of Meal Had (Breakfast, Lunch, Dinner)"
            onChange={props.handleTypeOfMeal}
          />
          <h3 className="dateReviewDirections">
            {" "}
            * ENTER YOUR DATE OF VISIT AND A FINAL REVIEW OUT OF 10 *
          </h3>
          <input
            type="date"
            name="Date Visited Link"
            placeholder="Enter the Date You Visited the Restaurant"
            onChange={props.handleDateVisited}
          />
          <input
            type="number"
            min="0.1"
            step="0.1"
            name="Rating out of 10"
            placeholder="Rate the Restaurant (0-10)"
            onChange={props.handleRating}
          />
          <button className="addReviewBtn" onClick={props.addReview}>
            Submit Review
          </button>
        </div>
      )}
    </>
  );
};

export default FoodForm;
