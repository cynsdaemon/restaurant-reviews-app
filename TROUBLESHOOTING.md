# Troubleshooting

This is a quick troubleshooting guide for ~~future me~~ Restaurant Reviews App. After following the instructions to run this project locally and making changes, a few scenarios may happen:

## Scenario 1 - The map and/or its map markers won't load.

1. In the dbhelper.js file, make sure the port variable is set equal to 8000 or equal to whatever port you prefer to run your local server from.
2. Back in the terminal or in a text editor, make sure to start the server from whatever port number set in dbhelper.js file.
3. Clear your browser's cache or do a hard fresh for the browser tab.

##Scenario 2 - The web browser is serving an old file aka "the phantom file"

4. When making file changes, disable the cache for the app in the web browser's dev tools. Then see step #3 above.