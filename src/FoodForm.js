import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import Select from "react-select"


const FoodForm = (props) => {
  const [phoneValue, setPhoneValue] = useState();

  const options = [
    {value: 'breakfast', label:'Breakfast'},
    {value: 'lunch', label:'Lunch'},
    {value: 'dinner', label:'Dinner'}

  ]

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
      {/* <input
        type="text"
        name="Phone Number"
        placeholder="Enter the Restaurant's Phone #"
        onChange={props.handlePhoneNum}
      /> */}

      <PhoneInput 
      placeholder="Select your Restaurant's Country and Enter their Phone #"
      country="US" 
      phoneVal={phoneValue} 
      
      onChange={setPhoneValue} />
  
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
        type="date"
        name="Date Visited Link"
        placeholder="Enter the Date You Visited the Restaurant"
        onChange={props.handleDateVisited}
      />
      {/* <input
        type="text"
        name="Date Visited Link"
        placeholder="Enter the Date You Visited the Restaurant"
        onChange={props.handleDateVisited}
      /> */}
      {/* <input
        type="text"
        name="Type of Meal"
        placeholder="Enter the type of Meal Had (Breakfast, Lunch, Dinner)"
        onChange={props.handleTypeOfMeal}
      /> */}
      <Select
        options= {options}
        placeholder="Select the type of Meal You Had (Breakfast, Lunch, Dinner)"
        // onChange={props.handleTypeOfMeal}
      />
      <input
        type="text"
        name="Reccomend to Friend"
        placeholder="Would Reccomend to Friend (YES/NO)"
        onChange={props.handleReccommend}
      />
      {/* <input
        type="text"
        name="Rating out of 10"
        placeholder="Rate the Restaurant (0-10)"
        onChange={props.handleRating}
      /> */}
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
  );
};

export default FoodForm;
