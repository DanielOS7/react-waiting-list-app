# Task

Fans would like to be added to a waiting list when they have been unlucky after the first batch of tickets sold out quickly. This will enable them to come back to the site and buy when more tickets become available.

Create a form that does a POST request with JSON to `/api/waiting-list`.

The body should be JSON and contain `emailAddress` and `mobileNumber` fields

## Minimum requirements:

- Allow fans to ‘join the waiting list’ by adding their email and phone number
- A success message "You have been added to the waiting list" should be displayed on successful submission
- Display error message returned by the api on an unsuccessful submission
- Accessibility should be considered
- Design should be loosely based on the Ticketmaster website: https://www.ticketmaster.co.uk/

## Additional features:

- Form and field validation
- Tests
- Visualise loading state

## Notes

- You're welcome to use any method of styling you feel comfortable with. We use styled-components at Ticketmaster but we don't expect you to learn a new library for this exercise!
- You are encouraged to add comments in the code, or by extending this readme file explaining logic or reasoning for your decisions.

## Comments 
This was my first time using next.js and testing-library instead of Enzyme so wasn't 100% sure if the project structure and file naming conventions used 
were the best practice for next.js! Interested to learn more :)

As this was a small app I did the waiting list page directly in index.js 'id="waiting-list"' instead of creating a component for it.

I had issues changing the background for the entire app in next.js so left it plain white, left this issue to look into testing-library and how to
set jest testing in this framework

