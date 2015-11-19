# DIY Project View
#####Created Fall 2015

*Catherine Zhang* <br>

**Testing on Node Server** <br>
I used the following commands to start up my project locally:

```
gulp
```
followed by

```
npm run watch
```

**Purpose & Features** <br>
This full stack challenge delivers a project detail view via a Node.js server with React + Flux for client-side rendering. For a given
maker's name and project Id, the core details of the project, followed by a comments box
and a list of users who favourited the project, are showcased. The page has been tested locally on a Chrome browser. <br>

> 1. <b>Routes and Links</b> - The page navigates to a 404 view for any url that does not follow the
				/makerId/projectId format. Each user view displayed on the page is linked to to their page on
				http://www.diy.org/makerId.

> 2. <b>Content Display</b> - The page shows the two possible types of content for a project: image and video.
				Videos are played in a modal dialog from clicking on the video preview.

> 3. <b>Comments</b> - The comments section displays current comments and allows user (me) to post comments.
				The comments are grouped in a way that thread starters -- comments that reply directly to the project --
				are showed with the rest of the thread -- comments that respond to the thread starter or to other thread responses
				-- indented in a block. Another feature of the comments is the ability to reply as a thread starter or to an existing
				thread. This can be done by clicking on the reply button on the comment that one wishes to respond to.

**Challenges and To Do's** <br>
And lessons learned!

> 1. <b>SVGs</b> - One of the differences between my project and the sample page was the buttons (favorites, reply) layout
				on the page. Originally, I tried to import the source SVG files and change the fill/shape, but my attempts were lackluster.
				I wasn't sure if the approach was to modify the source SVG files. Importing the files as img's then disabled these
				fill/shape properties. If I really wanted to, I can edit my own images of the desired fill/shape and import these
				files into my page. For

> 2. <b> Optimistic Loading </b> - Currently, when a comment is posted successfully, the component makes an ajax call to
				get the updated list. I could potentially render the comment optimistically and only make calls when necessary.

> 3. <b> Responsiveness, Etc. </b> - I wasn't really sure whether if the page should be responsive to different browser sizes,
				and if so, how the contents would be displayed differently. I did try to keep the general structure to be flexible
				by using the Bootstrap grids. Another component I was not sure was how the favourite users' name display were rendered
				(Replacing trailing characters with '...', which depended on the size of the div, which I assume to be flexible).
				I used a very simple truncate function here, but I wonder what the right approach would have been.

> 4. <b> Performance </b> - A valid project page takes awhile to render. Are there ways to load (lazily) so the important components
				are prioritized? How can I improve performance in general?

> 5. <b> Misc </b> - Did not implement the icons for the categories ('2D Animation', 'Various Drawing Styles', etc.). It seemed
				like the main API calls did not return any information regarding them.
