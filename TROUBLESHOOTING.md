# Troubleshooting

---

This is a quick troubleshooting guide for ~~future me~~ Restaurant Reviews App. After following the instructions to run this project locally and making changes, a few scenarios may happen:

***Scenario 1 - The map and/or its map markers won't load.** 

1. In the dbhelper.js file, make sure the port variable is set equal to 8000 or equal to whatever port you prefer to run your local server from.
2. Back in the terminal or in a text editor, make sure to start the server from whatever port number that's set in dbhelper.js file.
3. Clear your browser's cache or do a [hard refresh](https://www.getfilecloud.com/blog/2015/03/tech-tip-how-to-do-hard-refresh-in-browsers/) for the browser tab.

**Scenario 2 - The web browser is serving an old file aka "the phantom file"** 

4. When making file changes, disable the cache for the app in the web browser's dev tools. Clear the cache in the web browser and close it for a few minutes. Reopen the browser and navigate back to the URL of the restaurant app.

**Scenario 3 - I can view the project on my local machine, but not when viewing the project online (eg. Github pages)** 

5. To view the project on Github pages, in your ``dbhelp.js`` file change:

> `http://localhost:${port}/data/restaurants.json`

to the following:

> `https://{your-username}.github.io/{your-project-name}/data/restaurants.json`

**Scenario 4 - The restaurant images aren't loading on the project's live page (eg Github pages)** 

6. In the `dbhelp.js` file change: 

> `/img/${restaurant.photograph}`

to the following: 

> `https://{your-username}.github.io/{your-project-name}/img/${restaurant.photograph}`

