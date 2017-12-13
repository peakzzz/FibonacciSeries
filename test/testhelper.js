import { JSDOM } from 'jsdom';
const dom = new JSDOM(`<!DOCTYPE html>
<html>
<head>
  </head>
  <body>
    <i id="homeButton" class="ion-home home"></i>
    <div id="progress"></div>
    <div class="center">
      <div id="form">
        <i id="submit" class="ion-play next"></i>
        <div id="container">
          <input type="number" id="numField" required autofocus />
          <label id="inputLabel"></label>
          <div id="inputProgress"></div>
        </div>
      </div>
    </div>
  </body>
</html>`);

global.window = dom.window;
global.document = dom.window.document;

global.navigator = {
  userAgent: 'node.js'
};