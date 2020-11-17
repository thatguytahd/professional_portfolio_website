# Portfolio/Blog Website

## Introduction

The purpose of this website is to tell the visiters a little about myself, contain my resume, and provide where people can contact me. I wanted to pick something that could be very useful after the course is completed. I started this with the mobile first approach to make sure that it first looks good on a mobile platform and then I have two different breakpoints where the format changes to look better on bigger screen sizes. The first breakpoint is at 768px and larger and from their it moves the navigation from a column to a row format and is centered under my main title. The content div changes in the first break point where it uses flexbox to wrap the columns in the body and is in a two column wide format and the third column is stretched out below the first two. The second breakpoint is at 1025px and larger and the main nav is still in a row format but it moves to the top right corner of the page and the title is opposite on the left corner. The content div under the second breakpoint goes into a 3 column wide layout and the About me column moves to the middle of the body with the other two on each side of it.

I used Git so much and is probably my favorite part of the course. I really enjoyed learning the basics of using Git and Github. I have commmited 20+ updates to my repo while working on this project.

## Features

1. CSS Feature: "A navigation menu that expands and collapses properly at desktop and mobile sizes, such as by switching between vertical and horizontal, or is opened by clicking the “hamburger” menu item"

My navigation menu changes from vertical to horizontal as it shifts from a mobile to desktop formats.

2. CSS Feature: "Use Flexbox or CSS Grid to organize content areas based on mobile or desktop views. For example, swapping from a single column layout to a two-column layout on desktop"

I used Flexbox alot in styling my project and the best example of flexbox is how I used it to arange the columns on my main page. The mobile version of my site the content is in a single column, at the first break the columns flex wrap into a 2 column wide layout with the 3 column stretched to fit underneath, and the second break the content secion goes to a 3 column wide format and I used the flex order to move the about me column to the center.

3. JavaScript Feature: "Create a form (such as a ‘Contact Us’ form), validate at least 1 input (example, ensure email is in the proper format), and then use that information on your page somehow (ex: display it back to the user, or change a setting on the page based on a section)"

I created a "Contact Me" page where I created and styled a HTML form for the visitors to enter their name, email, and a message to send to me if they have any questions. I then wrote a JS script in "form.js" where I validate that a proper email is entered period and if one is entered it is compared to the regular expression to ensure its in a proper format and has @ and domain. If the email is not there or if its in the wrong format it will prompt an alert with an example. When clicking submit it runs the function to validate the email and when successful it prompts an alert saying that the information was processed listing the email provided in the form. After the validate and alert portions run I use Java to clear the form.

4. JavaScript Feature: "Create and populate a JavaScript array with one or more values and display the contents on your page"

I created an array that has a few random facts about me and in the generator.js file I wrote a random number generator that will pick a number 0-the length of the array and use that number to match an index in the array. Once it matches the index of one of my facts it inputs the fact in my banner that is under my nav bar. Everytime the page is refreshed the fact should randomize.




