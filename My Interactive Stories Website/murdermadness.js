function choose(option) {
  const textElement = document.getElementById('text');
  const storyDiv = document.getElementById('story');

  if (option === 'girl') {
    textElement.textContent = "You walk deeper into the forest and find a glowing cave.";
    storyDiv.innerHTML += `
      <button onclick="choose('enterCave')">Enter the cave</button>
      <button onclick="choose('runAway')">Run away</button>
    `;
  } else if (option === 'boy') {
    textElement.textContent = "You wait. Eventually, a strange creature approaches.";
    storyDiv.innerHTML += `
      <button onclick="choose('talk')">Talk to the creature</button>
      <button onclick="choose('hide')">Hide behind a tree</button>
    `;
  } else if (option === 'enterCave') {
    textElement.textContent = "Inside the cave, you discover ancient treasure!";
    storyDiv.innerHTML = textElement.outerHTML; // Clear old buttons
  } else if (option === 'runAway') {
    textElement.textContent = "You run back to the edge of the forest, safe but unsure.";
    storyDiv.innerHTML = textElement.outerHTML;
  } else if (option === 'talk') {
    textElement.textContent = "The creature is friendly and offers you a map.";
    storyDiv.innerHTML = textElement.outerHTML;
  } else if (option === 'hide') {
    textElement.textContent = "You hide, but the creature vanishes mysteriously.";
    storyDiv.innerHTML = textElement.outerHTML;
  }
}