Project Report

Working features of the app:

- Creating new employees.
- Displays all existing entries within a table.
- Deleting employees with dedicated 'remove' button for each entry.
- Details of employee: First Name, Last Name, Department, Phone Number, Email.
- Clear all data currently held in the entry text boxes using 'clear' button.

Non-functioning features of the app:

- Edit existing employee entry: Working 'edit' button, console.log returns correct id value for each entry,
main command prompt shows that it's receiving the GET request, however the data does not move to the text box fields
to allow for changing of data.

- Update existing employee entry: Issues similar to Edit, however this function goes hand in hand with the edit, so
it's useless unless edit works correctly to pass the data to the field. 

HTML front end: 

- Came across an excellent tutorial on using Angularjs and Bootstrap, to create a cleaner, more professional looking
interface with very minimal effort. 
-Changed Font and justification of text.
-Changed colour themes for each action button, to those typically associated with the action.

Challenges Encountered:

- I began working on the task using my macbook pro & and OSX Yosemite operating system, however I encountered numerous
issues when trying to properly install the appropriate packages. Node.js and NPM seemed to work fine to an extent, but
could not install mongoDB and get it to function correctly with Node.js. At first I attempted using NPM, in which I
encountered permission restrictions, despite being on the administrative account and installing with the 'Sudo' prefix.
Alternatively, I tried using homebrew which was recommended for easy installation of many packages including mongoDB,
but encountered similar issues. 

After a few hours trying to resolve this problem, I switched to Windows 8 on bootcamp, where I repeated the same process
and encountered no errors whatsoever. For future purposes I would probably attempy a full, clean uninstallation on OSX
and try to repeat the installing process again, now that I am more familiar with it.

- I first attempted using the Mongoose framework, as it was consistently being recommended for use with projects using
Node.Js & mongoDB. However encountered issues getting it to build correctly, and eventually tried using Express which
worked almost straight away with little effort. 

Once I had managed to correctly setup all the tools that I needed to create the software, progress was much smoother,
and other than the aforementioned feature malfunctions, encountered few issues in creating the app.

What I learned: 

 - Despite only working to a very short time frame, I believe I've learned a substantial amount. Being that my programming
skills predominantly involve C++ / C / Matlab scripting & more recently Javascript, I had to learn many methods and the
programming style involved in this project from the ground up. Progress began slowly, mainly due to the confusion caused
from the uncooperative packages, but it all started to click and make sense once I was able to start producing working
code. 

 - This task has helped me gain familiarity with programming using the command prompt / terminal, navigation & organisation
 of directories, and through a painstaking process, how to install packages to the system correctly. I've also realised the
 benefits of using frameworks, and how they can save a lot of time that can be better spent actually developing the unique
 product. 

 - With no serverside / back end programming experience, I now understand the role of Javascript & Node.Js in the creation
 of a product, and I quickly learned the advantages of creating a web app with front & back end communication, with faster
 loading of data, and more importantly the ability to store saved data independant from the front end, which means it is kept 
 even after refreshing or closing the server. 

 - I also now know what Github is, and how to create repositories and make new commits and pushing changes to Github.
 I have realised the advantages of incorporating this work ethic in the world of app development, and really enjoy the 
 concept of a collaborative community of software developers. I see that is ideal for posting your work publicly, being able
 to update it routinely with ease, as opposed to uploading countless versions fully, every time. Users can easily submit 
 feedback on issues with your product, or even fork the repository and make more efficient developments!





