---
layout: page
title: Laser Puzzle
excerpt: A little grid-based puzzle with lasers.
permalink: /lasergame
---

<div class="lasergame-canvas-div">
  <canvas id="laser-game-canvas" height="400px" width="400px"></canvas>
</div>


<div>
  <pre id="paths-pre">This is where the paths are supposed to be.</pre>
</div>


<div>
  <p><a href="{% link pages/lasergame-guide.md %}">How To Play</a></p>
  <p id="victory-p">Free Play. Click Seed Level or Daily Level to play a level.</p>
  <label for="edges">Edges to match to win:</label>
  <input type="number" id="edges" name="edges" value="5" min="1" max="20" />
  <span class="validity"></span>
  <br>
  <label for="seed">Seed:</label>
  <input type="text" id="seed" name="seed" placeholder="Enter seed"/>
  <br>
  <label>Set seed:</label>
  <input type="button" onclick="document.getElementById('seed').value = Date.now()" value="Current Time Seed" />
  <br>
  <input type="button" id="seed-level" value="Seed Level" />
  <input type="button" id="daily-level" value="Daily Level" />
  <p>Refresh the page to go back to free play.</p>
</div>


<script src="{% link assets/lasergame-bundle.js %}"></script>