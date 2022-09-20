import React, { useState } from "react";
import "./App.css";
import butcherPigImage from "./assets/butcherPig.jpeg";

const App = () => {
  // ACTION ITEM: to make the development process easier there are some preassigned words in the input field, when you are ready for your full user experience delete the test words passed to useState and pass an empty string
  const [userInput, setUserInput] = useState(
    "apple through queen squeal fry fluent"
  );
  const [inputTranslated, setInputTranslated] = useState("");

  // ACTION ITEM: the "myPigLatinCodeHere" function is where you will put your logic to translate the sentence entered by the user into Pig Latin
  const myPigLatinCodeHere = () => {
    // NO MODIFICATION NEEDED: the variable "arrayOfUserInput" will contain the text input from the user split into an array of words
    const arrayOfUserInput = userInput.toLowerCase().split(" "); // ***********(User Input is forced lowerCased() before conversion to array)
    console.log("arrayOfUserInput:", arrayOfUserInput);

    // NO MODIFICATION NEEDED: now that we have an array of words, we can map over the array and look at each word
    const translatedWordsArray = arrayOfUserInput.map((eachWord) => {
      console.log("eachWord:", eachWord);

      // NO MODIFICATION NEEDED: this code will look at each word and identify the vowels
      const vowelsArray = eachWord.split("").filter((vowel) => {
        return (
          vowel === "a" ||
          vowel === "e" ||
          vowel === "i" ||
          vowel === "o" ||
          vowel === "u"
        );
      });
      console.log("vowelsArray:", vowelsArray);

      // ACTION ITEM: your Pig Latin logic goes here!
      //==STORY1
      //Input: String
      //Output: String

      //Declare fLetter as eachWord.charAt(0)
      let fChar = eachWord.charAt(0); //Story 1
      let vowelHolder = 0;
      // for (let i = 0; i < eachWord.length; i++) {
      //   for (let j = i + 1; i < eachWord.length; i++) {
      //     if (eachWord[i] === "q" && eachWord[j] === "u") {
      //       return eachWord.slice(j + 1).concat("quay");
      //     }
      //   }
      // }
      // queen = ueenqay
      // queen = eenquay

      // const checkQU = (array) => {
      //   for (let i = 0; i < array.length; i++) {
      //     for (let j = i + 1; i < array.length; i++) {
      //       if (array[i] === "q" && array[j] === "u") {
      //         return array;
      //       }
      //     }
      //   }
      // };

      //If Vowels Arr is included inside of current Word
      if (vowelsArray.includes(fChar)) {
        //Add 'way' to end of array and return
        return eachWord.concat("way"); // Output: appleway
      } else if (eachWord.includes("qu")) {
        let qu = eachWord.indexOf("u") + 1;
        return eachWord.slice(qu) + eachWord.slice(0, qu).concat("ay");
        // qu - een + een + quay
        // squ - eal + eal + squay
      } else if (vowelsArray.length > 0 && vowelsArray !== undefined) {
        // Know what the first vowel is (index of vowel)
        // Slice accordingly
        for (let i = 0; i < eachWord.length; i++) {
          if (
            eachWord[i] === "a" ||
            eachWord[i] === "e" ||
            eachWord[i] === "i" ||
            eachWord[i] === "o" ||
            eachWord[i] === "u"
          ) {
            //Reassigned value of i (position of first vowel) to temp variable (vowelHolder)
            vowelHolder = i;
          }
        }
        return (
          eachWord.slice(vowelHolder - 1) +
          eachWord.slice(0, vowelHolder - 1).concat("ay")
        );
        //through --> Expected: oughthray
      } else {
        for (let i = 0; i < eachWord.length; i++) {
          if (eachWord[i] === "y") {
            //Reassigned value of i (position of first vowel) to temp variable (vowelHolder)
            vowelHolder = i;
          }
        }
        //Return current eachWord w/ last word as 1st word and add 'ay' at the end
        // fry --> yfray
        return (
          eachWord.slice(vowelHolder) +
          eachWord.slice(0, vowelHolder).concat("ay")
        );
      }

      //Else if

      //Add 'way' to the end of string
      // (potentionally use .slice() + 'way')
      //Convert array back to string using .join('')

      // ACTION ITEM: this return will be the output of your Pig Latin'd code
      return eachWord;
    });

    // NO MODIFICATION NEEDED: once the code has been modified it gets joined from an array back to a string
    const translatedWords = translatedWordsArray.join(" ");
    console.log("translatedWords:", translatedWords);

    // NO MODIFICATION NEEDED: this will update the inputTranslated variable in state
    setInputTranslated(translatedWords);
  };

  // ACTION ITEM: this method restarts the game by setting the original state, when you are ready for your full user experience delete the test words in setUserInput and pass an empty string
  const restartGame = () => {
    setUserInput("apple through queen squeal fry fluent");
    setInputTranslated("");
  };

  // NO MODIFICATION NEEDED: this method prevents React from refreshing the page unnecessarily
  const setUpPreventDefault = (e) => {
    e.preventDefault();
    myPigLatinCodeHere();
  };

  // NO MODIFICATION NEEDED: this method takes the value of the input and saves it in state
  const handleInput = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <div className="page-container">
      <div className="body-container">
        <h1>Pig Latin Translator</h1>
        <img
          src={butcherPigImage}
          alt="pig with butcher cut names in pig latin"
          className="butcher-pig-image"
        />

        <div className="input-section">
          <h4>Enter phrase to be translated:</h4>
          <input
            type="text"
            className="user-input"
            onChange={handleInput}
            value={userInput}
          />
          <br />
          <button onClick={setUpPreventDefault}>Submit</button>
          <button onClick={restartGame}>Clear</button>
        </div>
        <p>{inputTranslated}</p>
      </div>
      <footer>&copy; 2022 | Coded by: Your Names Here!</footer>
    </div>
  );
};

export default App;
