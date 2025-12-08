# Solace Candidate Assignment Discussion

## Introduction
Thank you for considering me as a potential candidate for Solace! I am definitely very honored to make it this far and to work on this assignment. I thoroughly enjoyed implementing new features and enhancements to turn what was given to me into something much more interactive, user friendly, and visually pleasing, while also optimizing both frontend and backend logic to account for better performance, scalability, and extensibility, and to employ good design practices.

I noted that it was recommended not to spend more than 2 hours on this assignment but I found myself having so much fun with this that I decided to make it more of a weekend project, and to see how far I could go and what I could do. Ultimately I didn't spend too much time on this (I promise!), as I did take time to play around with some features that come with Next.js as well as Tailwind CSS and I learned so much along the way!

This is actually my first experience with Next.js and Tailwind CSS. I have used similar JS frameworks like Nest.js and React.js and so I was quickly able to pick up Next.js. I find Next.js absolutely fascinating and powerful, as well as being super easy to learn and use. Similarly, Tailwind CSS is something that surprised me with how powerful and flexible it is, especially in conjunction with libraries such as ShadCDN. I very much enjoy and love these frameworks.

## Features, Enhancements, and Bug Fixes

I decided to tackle this piecemeal, having each commit pertain to a particular feature, enhancement, or idea.

1. Firstly, I wanted to get the application running out of the box so I initially took care of any apparent or glaring bugs that could easily be fixed.
- I fixed a runtime bug where the `yearsOfExperience` field needed to be converted to a string for searching.
- I fixed a runtime bug where the `<th>` elements in the table weren't inside a `<tr>` element.
- I fixed a bug where specialties weren't being searched properly.

2. After the application worked as it was expected I wanted to then start the work on enhancing and adding features. The first thing I noticed was that all of the code is in one `page.tsx` file and rendered entirely on the client,and making an API call to fetch all data. We want as much code rendered on the server side as much as possible, only having interactable components render on the client. I separated server side rendering and components from client side rendering and components.
- I kept all components that can be rendered on the server in the root `page.tsx` file.
- I extracted interactable components that are rendered on the client (JS bundle) into their own separate component files. These were the "search" elements of the page that automatically updates the list of advocates with each search update.
- The client will handle routing with each interaction on the page, which the server will then fetch data and render server components.
- I removed the `document.getElementById()` logic and replaced it with a state variable since we are working with a virtual DOM.

3. Next, I wanted to set up the database. Up until this point I've primarily (almost exclusively) used MySQL and seeing that this application uses PostgreSQL, I wanted to understand that more. Additionally I wanted the application to come close to a real life application as much as possible, and using a database is a sure way of doing that. 
- There was a bug in the `docker-compose.yml` file that caused the container to be in a restarting loop. This bug was fixed.
- I uncommented the database URL in the `.env` file.

4. After I was able to get the database up and seeded with advocates, I focused exclusively on the backend part of the application and the handling of fetching and creating data. This was one of the larger endeavors of the assignment.
- All logic pertaining to data and the database was extracted to its own data repository, encouraging separation of concern.
- I created an `Advocate` type.
- I created a DTO that acts as a translation layer between the database and the application, using the `Advocate` type. This makes it easier to work with these objects as it'll be uniform across the application.
- I made some changes with the updated search logic; better variable names, refactoring, etc.
- I updated the `GET` and `POST` requests to call from the data repository.
- I fixed the `index.ts` `setup()` function to always return the same Drizzle database object, fixing the errors when adding clauses such as `.where()` and `.insert()`.

5. I added logic to pass the URL as a paramter to search input components so that it persists on page refresh.

6. Once a good portion of the backend work was completed to fetch data, up to this point, I focused on the frontend part of the application to turn it from a bunch of text into an interactive, visually pleasing, and user friendly experience.
- I first changed the `<main>` tag to use Tailwind classes instead of explicit styling. This is for consistency and good practice.
- I extracted the table rendering into its own component.
- I styled the heading.

7. My next focus was on the search area. I used the ShadCDN library for certain components such as cards, inputs, and buttons. Please note that each ShadCDN component I installed generated some classes and files. These were also committed.
- I styled the search area.
- I styled the search input and reset buttons.

8. After the search area was done, I added a "Back to top" button as a common component that can be used anywhere. This provided a way for the user to smoothly scroll back to the top of page, enhancing the experience.

9. I then styled the advocates table and implemented a couple of Util functions such as formatting a phone number to be more readable and visually pleasing.

10. After some consideration and thought, I wanted to provide an even better and more interactive experience than just simply displaying a table. I thought to myself "Why not display each advocate as some kind of card on the page that is styled, looks modern, and enhancing the experience of using the application?". At first I decided to just go with it but then I saw how much better it was starting to look than simply using a table. This was another large endeavor in the entire assignment.
- I trashed the table logic.
- Instead, I created a grid of advocates, with each advocate being a card displaying their picture as well as other information in a much more intuitive way. This was where I used Item, Popover, Scrollable, icons, and some other features from ShadCDN along with my own styling to really make everything pop.
- Each card displays all of the information and the specialties are in a scrollable list. The user can view all specialities in one popup window by clicking on the right arrow.
- Each card has a visual cue when hovering over it.

11. Another feature I felt was necessary was to add pagination. It wouldn't be a good idea to display all of the advocates on one page where the user could scroll through forever (and potentially take a big hit on the database), even after narrowing down a search. Pagination is very common in situations like this so I decided to go with it. I found it to be one of the most challenging parts of doing this assignment as pagination is very dynamic. In the end, though, I was very pleased with how it turned out. 
- I added the ability to paginate through the advocates using a paginator.
- I added `page` as a parameter in the URL.
- With the addition of pagination meant updating data fetching logic to accomodate for this.
- I used the pagination library from ShadCDN with my own styling.
- I added some logic to clamp the page if a page is entered in the URL that is outside of the page bounds.
- I added some more types and enums: `SearchParams`, `PageLink`, and `PageLinkType`.

12. One thing I found when researching and learning more about Next.js is the ability to show some kind of loading feedback during situations where it takes a long time fetching data. Even though for this assignment there weren't many advocates in the database, in the real world there could be thousands or millions. In these situations fetching data can take some time.
- I added a loading skeleton that displays when advocate data is being fetched (and takes time) which is then replaced by the advocates grid when the results stream in.
- I added a spinner and a message in the loading skeleton.
- I cleaned up some Util functions.

13. I wanted to show images in the avatar circles for each card. To do this, I used free public avatar UI images and reseeded the database with image URLs for each advocate. 

14. Lastly, I did some cleaning up, more minor enhancements, bug fixes, and other things to get the application to where it is now!

## If I Had More Time

Of course there are still more features and enhancements that can be done with this project. Some include:
- Better and more robust searching. Perhaps multiple search fields instead of just one field. Also the ability to combine search strings, which would mean more backend logic to parse these search strings as well.
- Ability to sort the advocates by certain fields such as first name, last name, city, etc. or any combination of them.
- Input validation on the frontend and backend for the search field(s) as well as URL parameters.
- One thing I looked up was something called "debouncing". This essentially means that instead of querying the database with each keystroke, the application waits until the user stops typing after a certain amount of time, then query the database. This reduces the number of hits on the database drastically.
- Fix any vulnerabilities with packages and libraries that were installed.

## Conclusion

Again, I truly had so much fun with this assignment. If anything, I learned SO MUCH by doing this and I was amazed with what I could come up with, especially having worked mostly on the backend. I really did enjoy the frontend work and making the UI look so nice and polished. This was so fun that I wanted to keep going and thus it became a weekend project, which I hope is okay!

I hope you enjoy seeing my work as much as I enjoyed doing it!
