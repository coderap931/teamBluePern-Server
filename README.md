# GameChest

>  A server backend for our GameChest client that consists of Express, Node.js, and Postgresql. 
>  It consists of two tables total. One is our Users database consisting of those who register.
>  We have a Games database that encompasses all the content that is posted and created. 

**Technology Used:**

              JsonWebToken, Bcrypt, Express, Node.js, and PostgreSQL
----
Team Member #1  [Adam Patrick]

        Github: https://github.com/coderap931
        LinkedIn: https://www.linkedin.com/in/adam-patrick-06a970159/
        Portfolio links: https://coderap931.github.io/

Assigned Tasks

Git Master
Completion Date: Once a Git Master, always a Git Master

Endpoint: /game/create
Completion Date: Completed 11/29

Endpoint: /game/edit
Completion Date: Completed 11/29

Endpoint: /game/delete
Completion Date: Completed 11/29

Client Components: 
-GameCreateModal.js: Initial completed pass 12/1, no bugs found to date
-GameEditDeleteModal.js: Initial completed pass 12/1, minor styling changes and relocation of certain components to parent elements 12/4
-GameUpdateModal.js: Initial completed pass 12/1, minor styling changes and corrected props passes with team 12/9

Server components:
-games table: 11/28
-games model: 11/28
-games controller for my routes: 11/28
-headers middleware: 11/28
 
----
## Alex Myers
| Portfolio  Sites | Direct Link |
| ------ | ------ |
| GitHub | [github.com/Alex-Lee-Myers][Alex-Github] |
| LinkedIn | [linkedin.com/in/alexleemyers][Alex-LinkedIn] |
| Portfolio | [alex-lee-myers.github.io/][Alex-Portfolio] |

### Assigned Tasks

**Endpoint:** /user/register   
**Completion Date:** 12/4

| Date | Files, Commits and Comments |
| ------ | ------ |
| *11/26* | Models and controller for registration/sign-in first draft completed. ALl supporting files surrounding that (jwt, headers, server side app.js, index.js, etc) updated appropriately for testing on following day.  |
| *11/27:*  | 11/27: Debugged registration/sign-in. Fully functioning. Jaylen and Adam now able to test their endpoints.  |

**Endpoint:** /user/login    
**Completion Date:** 12/4

| Date | Files, Commits and Comments |
| ------ | ------ |
| *11/26* | Models and controller for log-in first draft completed. ALl supporting files surrounding that (jwt, headers, server side app.js, index.js, etc) updated appropriately for testing on following day. |
| *11/27:*  | Debugged log-in. Fully functioning. Jaylen and Adam now able to test their endpoints. |

**Additional Tasks**

| Date | Task Performed | Files, Commits and Comments |
| ------ | ------ | ------ |
| *12/4* | Heroku Deployment Began | Heroku deployment began. Due to user management issues from Heroku, Adam took over the deployment. Personal Heroku deployment performed later for practice.
| *12/6* | LocalHost<->Heroku Setup | Debugged and setup a way to quickly switch between local and deployed testing. Local testing worked perfect, Heroku testing is a WIP and will be done with team.
| *12/7* | LocalHost<->Heroku Testing Instructions | Created a [guide][LocalHostInstructions] on how to switch between LocalHost and Heroku fetches to test on all instances. Next up is how to properly do so for Heroku specifically with team.
| *12/7* | ReadMe.md updated completely, reformatted | ReadMe.md updated completely. Reformatted to be more presentable and legible. Updated personal information and commits.
| *12/7* | Team Updates Game Endpoints | In our session for the client debugging that end of our project, we discoverd our JsonWebToken was being applied in a couple Games endpoints not necessary. We eliminated those. Additionally, Adam made a great suggestion for our LocalHost<->Heroku Testing Instructions that I will be updating by end of day on 12/8.

**Client components:**
-   app.js
-   index.js
-   user table
  - usermodel.js
  - usercontroller.js
-   middleware
  - header.js
  - validateJWT.js
 ----
## Jaylen Wilson
| Portfolio  Sites | Direct Link |
| ------ | ------ |
| GitHub | [Link Needed][Jaylen-Github] |
| LinkedIn | [Link Needed][Jaylen-LinkedIn] |
| Portfolio | [Link Needed][Jaylen-Portfolio] |

### Assigned Tasks

**Endpoint:** /game/listAll    
**Completion Date:** WIP
| Date | Files, Commits and Comments |
| ------ | ------ |
| Date | Files, Commits and Comments |

**Endpoint:** /game/view/{id}    
**Completion Date:** WIP / [completion date]
| Date | Files, Commits and Comments |
| ------ | ------ |
| Date | Files, Commits and Comments |

Server components: 
- Index Model
- Index Controller
- [insert here]

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen.)

   [Adam-Github]: <https://github.com/joemccann/dillinger>
   [Adam-LinkedIn]: <https://github.com/joemccann/dillinger.git>
   [Adam-Pokemon]: <http://daringfireball.net>
   [Adam-CSS]: <http://daringfireball.net/projects/markdown/>
   [Adam-Giphy]: <https://github.com/markdown-it/markdown-it>
   [Alex-Github]: <http://ace.ajax.org>
   [Alex-LinkedIn]: <http://nodejs.org>
   [Alex-Portfolio]: <http://twitter.github.com/bootstrap/>
   [Jaylen-GitHub]: <http://www.google.com>
   [Jaylen-LinkedIn]: <http://www.google.com>
   [Jaylen-Portfolio]: <http://www.google.com>
   [LocalHostInstructions]: <https://github.com/coderap931/teamBluePern-Client/blob/develop/src/helpers/LocalhostInstructions.md>

