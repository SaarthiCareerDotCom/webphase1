##How to Add a course
 
 1. Add a folder in the course category and name it after the course. Copy index.html from a different course and copy it there.
 2. Check the element with id 'course-title' and change the class name. Replace the existing course with the new course name.
 3. In the batches section, find the elements with class "batches", each batch has an id. Example oops_batch1 , rename this to your new course name. Remember to keep this unique and meaningful.
 4. Edit the content and save it.
 5. The page should be visible on "/course/{your-course-name}"
 
##How to add the course in the home page

 1. Copy the element with class "course-info" and add new content in the element, paste it adjacent to the existing courses.
 2. The image can be defined in the SCSS file.
 3. If you want a information popup to come, when clicked on the action button, make sure that the href is set to '#'
 4. 
 
##How to make style changes.

 1. DO NOT MAKE CHANGES IN CSS DIRECTLY.
 2. Use scss files.
 3. Install node (stable version) https://nodejs.org/en/
 4. NPM should come bundles with it.
 5. Install node-sass by executing command. Run command **npm install -g node-sass**
 6. You may need to use admin permission for the comman above.
 7. It may fail the first time you try to install it, so try once more.
 8. In the css folder, run the shell script scss.sh, this works for Mac and Ubuntu, syntax for window can be slighty different.