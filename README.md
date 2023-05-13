# **Higher or Lower**

This website was created as the 2nd Milestone Project (User Centric Frontend Development) for Code Institute's web application development course.

[**__link to deployed site here__**](https://andrewcannan.github.io/higher-or-lower/)
<br><br>

<img src="assets/readme-images/Screenshot 2023-05-12 134820.png">
<br><br>

# Contents

* [User Experience](#user-experience-ux)
    * [Owner Goals](#owners-goals)
    * [Visitor Goals](#visitor-goals)

* [Design](#design)
    * [Wireframes](#wireframes)
    * [Typography](#typography)
    * [Images](#images)
    * [Icons](#icons)
* [Features](#features)
    * [HomePage](#homepage--first-section)
    * [Rules](#rules-section)
    * [Game](#game-section)
        * [Card](#card)
        * [Input and Submission](#user-input-and-submission)
        * [Response](#response)
        * [Timer](#timer)
        * [Next Card](#next-card-button)
        * [Reset and Home](#reset-and-home-buttons)
    * [Footer](#footer)
    * [404 Page](#404-page)
    * [Future Implementations](#future-implementations)
<br><br>


# User Experience

Higher or Lower is a simple card guessing game where you have three attempts in 99 seconds to correctly guess the value of the face down card.
<br><br>

## Owners Goals

To provide a basic fun game for the user to play.

## Visitor Goals

Play a Game?
<br><br>
<br>

# Design

## WireFrames 

Wireframes created on [Figma](https://www.figma.com/).

<details>
<summary>Homepage Desktop</summary>
<br>
<img src="assets/readme-images/first-paint-desktop.png">
</details>
<details>
<summary>Homepage Mobile</summary>
<br>
<img src="assets/readme-images/first-paint-mobile.png">
</details>
<details>
<summary>Rules Desktop</summary>
<br>
<img src="assets/readme-images/rules-desktop.png">
</details>
<details>
<summary>Rules Mobile</summary>
<br>
<img src="assets/readme-images/rules-mobile.png">
</details>
<details>
<summary>Game Desktop</summary>
<img src="assets/readme-images/game-desktop.png">
</details>
<details>
<summary>Game Mobile</summary>
<br>
<img src="assets/readme-images/game-mobile.png">
</details>
<br>

## Typography 

For the main headings a western style font was chosen *insert link* to stay it the overall theme off the game. For all other text Roboto *insert link* was chosen as its modern and easily readable. All fonts from Google Fonts.

## Images 

*fill in later*

## Icons

Icons used for the Reset and Home buttons and in the Footer are from [FontAwesome](https://fontawesome.com/).

Logo image was used to create a favicon at [Favicon.io](https://favicon.io/).
<br><br>

# Features

A single page application that has three main sections that hide/show on the relevant button clicks.

## Homepage / First Section

On intial load of the site this is the header div that is only shown whilst the other two main divs are hidden on page load. Consists of a logo and the game heading, also a button that will toggle the display attribute of this div and show only the rules div.
<details>
<summary>Homepage</summary>
<img src="assets/readme-images/homepage.png">
</details>

## Rules Section

This section explains the rules of the game to the user for the upcoming game. consists of heading and rules text, also a button that will toggle the display attribute of this div to hidden and show the game div.
<details>
<summary>Rules</summary>
<img src="assets/readme-images/rules.png">
</details>

## Game Section

This is the main part of the application and has a few main parts to it. The heading, the card, the users input and submission, a timer, a next card button, the response to the user (i.e scores and hints) and two buttons.

### Card 

The card is displayed face down initially the "card back" always displays the same image but the "card face" is assigned randomly, it is two divs positioned absolutely on top of each other wrapped in a container that will flip to reveal the card face on either a correct guess or when the user has ran out of guesses.
An array stores each card as an object that is picked at random and the corresponding key is assigned to the card face div as a ccs class that has the image for that card.
<details>
<summary>Card Back</summary>
<img src="assets/readme-images/card-back.png">
</details>
<details>
<summary>Card Face</summary>
<img src="assets/readme-images/card-face.png">
</details>

### User Input and Submission

The input field is set to capatalize the first letter using js to evaluate the users input against the randomly generated answer. 
When submit button is clicked the validate function is called to check the users input is in array of accepted answers, if not the answer will not be submitted and the user alerted. If it is then the answer is accepted and the check answer function called which will evalute the users answer against the randomly picked card. 
<details>
<summary>Input Feild</summary>
<img src="assets/readme-images/input-field.png">
</details>
<details>
<summary>Submit Button</summary>
<img src="assets/readme-images/submit-button.png">
</details>

### Response

This section holds the feeback to the user from the game object that holds the current amount of tries left, correct and incorrect answers. Also a div that show/hides containing a hint to wether the card being guessed is higher or lower than their last guess, if the guess is incorrect. if the timer runs out will also display that to the user, or when ran out of attempts.
<details>
<summary>Game Scores</summary>
<img src="assets/readme-images/game-scores.png">
</details>
<details>
<summary>Hints</summary>
<img src="assets/readme-images/submit-button.png">
</details>

### Timer

A while loop that increments the timer in the game object down while the timer is greater than 0. Had a little trouble getting this to increment down once every second and had to learn how to use promise and resolve to achieve this.
<details>
<summary>Timer</summary>
<img src="assets/readme-images/timer.png">
</details>

### Next Card Button

If amount of tries has ran out or the timer has ran out the submit button will hide and the next card button will appear in red. This will call a new game.

If the card is guessed correctly the submit button will hide and this will show in green, will also call a new game when clicked.
<details>
<summary>Next Card Red</summary>
<img src="assets/readme-images/next-card-red.png">
</details>
<details>
<summary>Next Card Green</summary>
<img src="assets/readme-images/next-card-green.png">
</details>

### Reset and Home buttons

A button that will reset the game object, update the scores section and call a new game.

Home button reloads the window and displays the Homepage/First section giving the impression the user has gone back to the start.
<details>
<summary>Reset</summary>
<img src="assets/readme-images/reset-button.png">
</details>
<details>
<summary>Home</summary>
<img src="assets/readme-images/home-button.png">
</details>

## Footer

Footer displays a link to my GitHub profile for more projects to be checked out.
<details>
<summary>Footer</summary>
<img src="assets/readme-images/footer.png">
</details>

## 404 Page

Simple page consisting of Game heading and logo, text to make the user aware theyve reached a broken link and a button to direct them back to the Homepage.
<details>
<summary>404 Page</summary>
<img src="assets/readme-images/404.png">
</details>

## Future Implementations

If this was to be developed further could create a log in and database to store the users scores and implement a highscore system to intice players to return and beat their score.
<br><br>

# Technologies

## Languages

SIte was created using vanilla HTML and CSS no frameworks, and Javascript with a some Jquery used.

## Frameworks, Libaries and Programs

* JQuery
    * Used to simplify some code written.
* Git / Github
    * Used for version control, storage and deployment.
* Gitpod
    * IDE used.
* GoogleFonts
    * Used for importing fonts into stylesheet.
* Google Dev Tools
    * Used for troubleshooting and small style changes.
* Favicon.io
    * Used to create a favicon.
* Figma
    * Used for to create Wireframes.
* /////
    * Used to source images.
* ////
    * Used to crop cards from main image.
* /////
    * Used to remove background from croped images.
<br><br>

# Testing

## HTML Validation

The [W3C Markup Validation Service](https://validator.w3.org/) was used to validate the HTML code. Passed with 0 errors.
<details>
<summary>HTML Validation</summary>
<br>
<img src="assets/readme-images/html-validation.png">
</details>