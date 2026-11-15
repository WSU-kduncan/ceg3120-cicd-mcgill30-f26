## 2. Building the web service container

### Web Content 

The website content for this project is a set of pages that I built for my CS 2800 course. 

The site has a couple pages of HTML, a CSS styling file, and some JS. 

All of the following files live in [`Website content`](web-content/) foler:

- [index.html](web-content/index.html): the home page
- [`pages/contact.html`](web-content/pages/contact.html): contact page
- [`pages/form.html`](web-content/pages/form.html): a sample form page
- [`pages/indexInClass.html`](web-content/pages/indexInClass.html): a random page with an image
- [`templete.html`](web-content/templete.html): templete that was created to build the other pages
- [`style.css`](web-content/style.css): styling file shared by the pages
- [`script.js`](web-content/script.js): work in progress addition to add some function to the form page
- [`images/`](web-content/images/): images used by the pages

**Note: No generative AI was used for the creation of these pages. These pages were all personally created for my current in class follow along example in my CS 2800 course that I am taking this semester.**


### Dockerfile

The [Dockerfile](Dockerfile) tells docker how to build our iamge. It only has the two following instructions:

- `FROM httpd:2.4` which starts from the official Apache HTTP Server image

- `COPY web-content/ /usr/local/apache2/htdocs/` copies everything in `web-content/` into `/usr/local/apache2/htdocs/`, which is the default directory `httpd` serves web pages from. 

**To build the Dockerfile:**

In the root directory of the repository (the folder that holds the Dockerfile) run `docker build -t ryanmcgill18/ceg3120-ci:latest .`

- `-t` argument allows us to change the name and tag when building
- the image name has to start with my DockerHub username (`ryanmcgill18/`) so it can be pushed to my DockerHub account
- `.` argument tells docker to build on the current file

My actual command to build this docker file was `docker build -t ryanmcgill18/ceg3120-ci:latest .`

**To push the Dockerfile:**

1. First login with `docker login -u ryanmcgill18`

- To login with a PAT (Personal Access Token) rather than a password:
    - Open a browser and go to [DockerHub](https://hub.docker.com)
    - Find the setting for PAT's
    - Generate a new PAT (read/write reccommmended for access scope)
    - Paste that PAT into the command line when prompted for your password on login

2. Then run `docker push ryanmcgill18/ceg3120-ci:latest` in order to push the image to DockerHub

**To run a container from the image:**

Run `docker run -d --name site -p 8080:80 ryanmcgill18/ceg3120-ci:latest` and then open `http://localhost:8080` in a browser.

**[ceg3120-ci](https://hub.docker.com/repository/docker/ryanmcgill18/ceg3120-ci/general) DockerHub Repository**