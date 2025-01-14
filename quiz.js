class OQuiz {
  constructor() {
    //* Greeting and intro
    this.greeting = document.querySelector("[data-greeting]");
    this.startBtn = document.querySelector("[data-getstarted-btn]");

    //* First question
    this.firstQues = document.querySelector("[data-firstques]");
    this.firstOptions = document.querySelectorAll("[data-first-options] li");
    this.fistQuesNextBtn = document.querySelector("[data-firstques-next]");

    //* Second question
    this.secondQues = document.querySelector("[data-secondques]");
    this.secondOptions = document.querySelectorAll("[data-second-options] li");
    this.secondQuesNextBtn = document.querySelector("[data-secondques-next]");

    //* Third question
    this.thirdQues = document.querySelector("[data-thirdques]");
    this.thirdOptions = document.querySelectorAll("[data-third-options] li");
    this.thirdQuesNextBtn = document.querySelector("[data-thirdques-next]");

    //* Fourth question
    this.fourthQues = document.querySelector("[data-fourthques]");
    this.fourthOptions = document.querySelectorAll("[data-fourth-options] li");
    this.fourthQuesNextBtn = document.querySelector("[data-fourthques-next]");

    //* Fifth question
    this.fifthQues = document.querySelector("[data-fifthques]");
    this.fifthOptions = document.querySelectorAll("[data-fifth-options] li");
    this.fifthQuesNextBtn = document.querySelector("[data-fifthques-next]");

    //* Sixth question
    this.sixthQues = document.querySelector("[data-sixthques]");
    this.sixthOptions = document.querySelectorAll("[data-sixth-options] li");
    this.sixthQuesNextBtn = document.querySelector("[data-sixthques-next]");

    //* Seventh question
    this.seventhQues = document.querySelector("[data-seventhques]");
    this.seventhOptions = document.querySelectorAll(
      "[data-seventh-options] li"
    );
    this.seventhQuesNextBtn = document.querySelector("[data-seventhques-next]");
    this.seventhQuesPrevBtn = document.querySelector("[data-seventhques-prev]");

    //* Recommendation Result
    this.result = document.querySelector("[data-product-result]");
    this.selectedResult = document.getElementById("userChooseQuiz");
    this.resetQuizBtn = document.querySelector("[data-reset-quiz]");

    //* RX Link
    this.rxLink =
      "https://lensandframe.co/products/ombraz-classics-prescription-sunglasses-tortoise";

    //* Initiate the app
    this.init();
  }

  init() {
    console.info("OQuiz initiated!");

    this.data();
    this.getStarted();
    this.firstQuestions();
    this.secondQuestions();
    this.thirdQuestions();
    this.fourthQuestions();
    this.fifthQuestions();
    this.sixthQuestions();
    this.seventhQuestions();
  }

  data() {
    window.OQuizData = {
      userChoose: {
        first: [],
        second: [],
        third: [],
        fourth: [],
        fifth: [],
        sixth: [],
        seventh: [],
      },
    };
  }

  getStarted() {
    //* Greening and intro
    this.startBtn &&
      this.startBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        this.greeting.classList.add("cl--hide");
        this.firstQues.classList.remove("cl--hide");
      });
  }

  resetQuiz() {
    // Reset userChoose object
    window.OQuizData.userChoose = {
      first: [],
      second: [],
      third: [],
      fourth: [],
      fifth: [],
      sixth: [],
      seventh: [],
    };

    // Reset all question elements to their initial state
    this.firstQues.classList.remove("cl--hide");
    this.secondQues.classList.add("cl--hide");
    this.thirdQues.classList.add("cl--hide");
    this.fourthQues.classList.add("cl--hide");
    this.fifthQues.classList.add("cl--hide");
    this.sixthQues.classList.add("cl--hide");
    this.seventhQues.classList.add("cl--hide");
    this.result.classList.add("cl--hide");

    // Reset all option elements to their initial state
    this.firstOptions.forEach((option) => {
      option.classList.remove("cl--active");
      option.removeAttribute("disabled");
    });

    this.secondOptions.forEach((option) => {
      option.classList.remove("cl--active");
      option.removeAttribute("disabled");
    });

    this.thirdOptions.forEach((option) => {
      option.classList.remove("cl--active");
      option.removeAttribute("disabled");
    });

    this.fourthOptions.forEach((option) => {
      option.classList.remove("cl--active");
      option.removeAttribute("disabled");
    });

    this.fifthOptions.forEach((option) => {
      option.classList.remove("cl--active");
      option.removeAttribute("disabled");
    });

    this.sixthOptions.forEach((option) => {
      option.classList.remove("cl--active");
      option.removeAttribute("disabled");
    });

    this.seventhOptions.forEach((option) => {
      option.classList.remove("cl--active");
      option.removeAttribute("disabled");
    });

    // Hide the "previous" button for the first question
    this.seventhQuesPrevBtn.classList.add("cl--visually-hidden");

    // Check and show the "next" button for the first question
    this.checkAndShowNextButton();
  }

  checkAndShowNextButton() {
    if (userChoose.first.length > 0) {
      this.fistQuesNextBtn.classList.remove("cl--visually-hidden");
    } else {
      this.fistQuesNextBtn.classList.add("cl--visually-hidden");
    }

    if (userChoose.second.length > 0) {
      this.secondQuesNextBtn.classList.remove("cl--visually-hidden");
    } else {
      this.secondQuesNextBtn.classList.add("cl--visually-hidden");
    }

    if (userChoose.third.length > 0) {
      this.thirdQuesNextBtn.classList.remove("cl--visually-hidden");
    } else {
      this.thirdQuesNextBtn.classList.add("cl--visually-hidden");
    }

    if (userChoose.fourth.length > 0) {
      this.fourthQuesNextBtn.classList.remove("cl--visually-hidden");
    } else {
      this.fourthQuesNextBtn.classList.add("cl--visually-hidden");
    }

    if (userChoose.fifth.length > 0) {
      this.fifthQuesNextBtn.classList.remove("cl--visually-hidden");
    } else {
      this.fifthQuesNextBtn.classList.add("cl--visually-hidden");
    }

    if (userChoose.sixth.length > 0) {
      this.sixthQuesNextBtn.classList.remove("cl--visually-hidden");
    } else {
      this.sixthQuesNextBtn.classList.add("cl--visually-hidden");
    }

    if (userChoose.seventh.length > 0) {
      this.seventhQuesNextBtn.classList.remove("cl--visually-hidden");
      this.seventhQuesPrevBtn.classList.remove("cl--visually-hidden");
    } else {
      this.seventhQuesNextBtn.classList.add("cl--visually-hidden");
      this.seventhQuesPrevBtn.classList.add("cl--visually-hidden");
    }
  }

  firstQuestions() {
    this.firstOptions &&
      this.firstOptions.forEach((option) => {
        const id = option.getAttribute("data-key");
        const label = option.textContent.toLocaleLowerCase();
        option.addEventListener("click", (event) => {
          if (!option.classList.contains("cl--active")) {
            // Remove the "cl--active" class from all options
            this.firstOptions.forEach((otherOption) => {
              otherOption.classList.remove("cl--active");
              otherOption.setAttribute("disabled", true); // Disable all other options
            });

            option.classList.add("cl--active");
            userChoose.first = [{ id, label }]; // Replace the previous selection
          } else {
            option.classList.remove("cl--active");
            option.removeAttribute("disabled"); // Enable the option when unselected
            userChoose.first = [];
          }

          this.checkAndShowNextButton(); // Check if the next button should be shown
        });
      });

    // When click next button then hide first question and show second question
    this.fistQuesNextBtn &&
      this.fistQuesNextBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        this.firstQues.classList.add("cl--hide");
        this.secondQues.classList.remove("cl--hide");
      });
  }

  secondQuestions() {
    this.secondOptions &&
      this.secondOptions.forEach((option) => {
        const id = option.getAttribute("data-key");
        const label = option.textContent.toLocaleLowerCase();
        option.addEventListener("click", (event) => {
          if (!option.classList.contains("cl--active")) {
            // Remove the "cl--active" class from all options
            this.secondOptions.forEach((otherOption) => {
              otherOption.classList.remove("cl--active");
              otherOption.setAttribute("disabled", true); // Disable all other options
            });

            option.classList.add("cl--active");
            userChoose.second = [{ id, label }]; // Replace the previous selection
          } else {
            option.classList.remove("cl--active");
            option.removeAttribute("disabled"); // Enable the option when unselected
            userChoose.second = [];
          }

          this.checkAndShowNextButton(); // Check if the next button should be shown
        });
      });

    // When click next button then hide second question and show third question
    this.secondQuesNextBtn &&
      this.secondQuesNextBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        this.secondQues.classList.add("cl--hide");
        this.thirdQues.classList.remove("cl--hide");
      });
  }

  thirdQuestions() {
    this.thirdOptions &&
      this.thirdOptions.forEach((option, index) => {
        const id = option.getAttribute("data-key");
        const label = option.textContent.toLocaleLowerCase();
        option.addEventListener("click", (event) => {
          if (!option.classList.contains("cl--active")) {
            // Remove the "cl--active" class from all options
            this.thirdOptions.forEach((otherOption) => {
              otherOption.classList.remove("cl--active");
              otherOption.removeAttribute("disabled"); // Enable all other options
            });

            option.classList.add("cl--active");
          } else {
            option.classList.remove("cl--active");
            option.removeAttribute("disabled"); // Enable the option when unselected
          }

          // Always insert data into the third array
          userChoose.third = [{ id, label }];

          if (index === 0 || index === 1) {
            //! Proceed to step 4
            this.thirdQues.classList.add("cl--hide");
            this.fourthQues.classList.remove("cl--hide");
          } else if (index === 2) {
            //! Redirect to the result page
            // swal('RX', "Custom RX powered by Lens & Frame Co. Handcrafted in California", "info")
            swal({
              title: "RX",
              text: "CUSTOM RX POWERED BY LENS & FRAME CO. HANDCRAFTED IN CALIFORNIA",
              icon: "info",
              buttons: {
                cancel: "No, thanks",
                visit: {
                  text: "Visit Now",
                  value: "visit",
                },
              },
            }).then((value) => {
              switch (value) {
                case "cancel":
                  swal("No worries, you can still take the quiz!");
                  break;
                case "visit":
                  swal("Redirecting...", {
                    buttons: false,
                    timer: 2000,
                  }).then(() => {
                    window.open(this.rxLink, "_blank");
                  });
                  break;
                default:
                  swal("No worries, you can still take the quiz!");
              }
            });

            // After showing the alert, you can proceed to the next question
            this.thirdQues.classList.add("cl--hide");
            this.fourthQues.classList.remove("cl--hide");
          } else if (index === 3) {
            //! Skip to the fifth question
            this.thirdQues.classList.add("cl--hide");
            this.fifthQues.classList.remove("cl--hide");
          }

          this.checkAndShowNextButton(); // Check if the next button should be shown
        });
      });
  }

  fourthQuestions() {
    this.fourthOptions &&
      this.fourthOptions.forEach((option) => {
        const id = option.getAttribute("data-key");
        const label = option.textContent.toLocaleLowerCase();
        option.addEventListener("click", (event) => {
          if (!option.classList.contains("cl--active")) {
            // Remove the "cl--active" class from all options
            this.fourthOptions.forEach((otherOption) => {
              otherOption.classList.remove("cl--active");
              otherOption.setAttribute("disabled", true); // Disable all other options
            });

            option.classList.add("cl--active");
            userChoose.fourth = [{ id, label }]; // Replace the previous selection
          } else {
            option.classList.remove("cl--active");
            option.removeAttribute("disabled"); // Enable the option when unselected
            userChoose.fourth = [];
          }

          this.checkAndShowNextButton(); // Check if the next button should be shown
        });
      });

    // When click next button then hide fourth question and show fifth question
    this.fourthQuesNextBtn &&
      this.fourthQuesNextBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        this.fourthQues.classList.add("cl--hide");
        this.fifthQues.classList.remove("cl--hide");
      });
  }

  fifthQuestions() {
    this.fifthOptions &&
      this.fifthOptions.forEach((option) => {
        const id = option.getAttribute("data-key");
        const label = option.textContent.toLocaleLowerCase();
        option.addEventListener("click", (event) => {
          if (!option.classList.contains("cl--active")) {
            // Remove the "cl--active" class from all options
            this.fifthOptions.forEach((otherOption) => {
              otherOption.classList.remove("cl--active");
              otherOption.setAttribute("disabled", true); // Disable all other options
            });

            option.classList.add("cl--active");
            userChoose.fifth = [{ id, label }]; // Replace the previous selection
          } else {
            option.classList.remove("cl--active");
            option.removeAttribute("disabled"); // Enable the option when unselected
            userChoose.fifth = [];
          }

          this.checkAndShowNextButton(); // Check if the next button should be shown
        });
      });

    // When click next button then hide fifth question and show result
    this.fifthQuesNextBtn &&
      this.fifthQuesNextBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        this.fifthQues.classList.add("cl--hide");
        this.sixthQues.classList.remove("cl--hide");
      });
  }

  sixthQuestions() {
    this.sixthOptions &&
      this.sixthOptions.forEach((option) => {
        const id = option.getAttribute("data-key");
        const label = option.textContent.toLocaleLowerCase();
        option.addEventListener("click", (event) => {
          if (!option.classList.contains("cl--active")) {
            // Remove the "cl--active" class from all options
            this.sixthOptions.forEach((otherOption) => {
              otherOption.classList.remove("cl--active");
              otherOption.setAttribute("disabled", true); // Disable all other options
            });

            option.classList.add("cl--active");
            userChoose.sixth = [{ id, label }]; // Replace the previous selection
          } else {
            option.classList.remove("cl--active");
            option.removeAttribute("disabled"); // Enable the option when unselected
            userChoose.sixth = [];
          }

          this.checkAndShowNextButton(); // Check if the next button should be shown
        });
      });

    // When click next button then hide sixth question and show result
    this.sixthQuesNextBtn &&
      this.sixthQuesNextBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        this.sixthQues.classList.add("cl--hide");
        this.seventhQues.classList.remove("cl--hide");
      });
  }

  seventhQuestions() {
    this.seventhOptions &&
      this.seventhOptions.forEach((option) => {
        const id = option.getAttribute("data-key");
        const label = option.textContent.toLocaleLowerCase();
        option.addEventListener("click", (event) => {
          if (!option.classList.contains("cl--active")) {
            // Remove the "cl--active" class from all options
            this.seventhOptions.forEach((otherOption) => {
              otherOption.classList.remove("cl--active");
              otherOption.setAttribute("disabled", true); // Disable all other options
            });

            option.classList.add("cl--active");
            userChoose.seventh = [{ id, label }]; // Replace the previous selection
          } else {
            option.classList.remove("cl--active");
            option.removeAttribute("disabled"); // Enable the option when unselected
            userChoose.seventh = [];
          }

          this.checkAndShowNextButton(); // Check if the next button should be shown
        });
      });

    // When click next button then hide seventh question and show result
    this.seventhQuesNextBtn &&
      this.seventhQuesNextBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        this.seventhQues.classList.add("cl--hide");
        this.result.classList.remove("cl--hide");
        this.showProductRecommendation(); // Call the show product recommendation function
      });

    // When click previous button then go back all the way to the first question
    this.seventhQuesPrevBtn &&
      this.seventhQuesPrevBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        this.seventhQues.classList.add("cl--hide");
        this.sixthQues.classList.remove("cl--hide");
        this.resetQuiz(); // Call the reset function
      });
  }

  showProductRecommendation() {
    // Combine all the userChoose arrays into a single object
    const allUserChoices = {
      frameStyle: userChoose.first[0].label,
      frameColor: userChoose.second[0].label,
      productType: userChoose.third[0].label,
      lensColor: userChoose.fourth[0].label,
      faceSize: userChoose.fifth[0].label,
      customPair: userChoose.sixth[0].label,
      yesNo: userChoose.seventh[0].label,
    };

    // Show the result
    this.result.classList.remove("cl--hide");

    // Remove the selected result if it exists
    if (this.selectedResult) this.selectedResult.innerHTML = "";

    this.selectedResult.innerHTML += `
      <p style="color: steelblue;">1 Frame Style: ${allUserChoices.frameStyle}</p>
      <p style="color: steelblue;">2 Frame Color: ${allUserChoices.frameColor}</p>
      <p style="color: steelblue;">3 Product Type: ${allUserChoices.productType}</p>
      <p style="color: steelblue;">4 Lens Color: ${allUserChoices.lensColor}</p>
      <p style="color: steelblue;">5 Face Size: ${allUserChoices.faceSize}</p>
      <p style="color: steelblue;">6 Custom Pair: ${allUserChoices.customPair}</p>
      <p style="color: steelblue;">7 Yes or No: ${allUserChoices.yesNo}</p>
    `;

    this.resetQuizBtn &&
      this.resetQuizBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        this.resetQuiz(); // Call the reset function
      });

    // Log the combined userChoose object
    console.log("User choices: ", allUserChoices);

    this.fetchProduct("quiz-api"); // Call the fetch product function
  }

  fetchProduct(collection) {
    const cors = "https://corsproxy.io/?";
    let url = `https://ab9hxha4u6sd8nxk-19865583.shopifypreview.com/collections/${collection}?view=product-quiz-api`;

    // Fetch the JSON data
    fetch(cors + url)
      .then((res) => res.json())
      .then(({ data: { products } }) => {
        // Extract user choices
        const { frameColor, lensOptions, frameSize } = OQuizData.userChoose;

        // Filter the products based on user choices
        const filteredProducts = products.filter((product) => {
          const { options } = product;

          console.log("Product options: ", options);

          // Find the option values for each choice
          const frameColorOption = options.find(
            (opt) => opt.name === "Frame Color"
          );
          const lensOptionsOption = options.find(
            (opt) => opt.name === "Lens Options"
          );
          const frameSizeOption = options.find(
            (opt) => opt.name === "Frame Size"
          );

          // Check if the product's options match the user's choices
          return (
            frameColorOption.selected_value === frameColor &&
            lensOptionsOption.selected_value === lensOptions &&
            frameSizeOption.selected_value === frameSize
          );
        });

        // Display the results
        if (filteredProducts.length > 0) {
          swal({
            title: "Filtered Recommendations",
            text: JSON.stringify(filteredProducts, null, 2),
            icon: "info",
          });
        } else {
          // If no matching products were found
          swal({
            title: "No Matching Products Found",
            text: "We couldn't find any products matching your choices, but we can still provide recommendations or further assistance.",
            icon: "info",
            buttons: ["OK", "Get Assistance"],
          }).then((value) => {
            if (value === "Get Assistance") {
              window.location.href = "contact.html"; // Redirect to the contact page
            }
          });
        }
      })
      .catch((error) => console.log(error))
      .finally(() => console.log("Fetch completed!"));
  }
}

document.addEventListener("DOMContentLoaded", () => {
  OQuiz = new OQuiz();
  userChoose = window.OQuizData.userChoose;
});
