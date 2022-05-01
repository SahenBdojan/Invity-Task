# Invity-Task

There are two files. One named Test.js is designed to run 5 times, test after test until all 5 runs are complete. Second file named TestVersionTwo.js is prepared in the way so it is more editable in the future in case something new is added or existing functionalities are not working. Approach was to test the application regarding the dcoumentation as easiest as possible. 

**Encountered problems** - in the attached files, the option to click on a button on a line containing BEST OFFER is not implemented. THat would be the first problem that I encountered. During the preparation process, I had to use source code of the website (F12) a lot since classes from Cypres GUI were not same as the classes in the HTML code. Some actions like clicking on button didnt work, so I had to add force:ture method so this step passes and test can continue. There were some more complications with classes of different components but in the end a little bit of googling helped me. 

**Suggestions/Improvements** - From my point of view, there are sometimes too many classes for a single component. Im not sure if thats something that can be done in more cleaner way, but for a better readibility of the automated test and the website itself, some restructuralization will be good (if applicable). 
