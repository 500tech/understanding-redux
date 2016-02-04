/* UI */
function renderUI() {
  const statusImage   = document.querySelector('.status-image');
  const statusCodes   = store.getState().statusCodes;
  const currentStatus = statusCodes[store.getState().currentIndex];

  statusImage.style.backgroundImage = `url("http://http.cat/${currentStatus}")`;
}

renderUI();

/* Actions */
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

prevButton.onclick = () => store.dispatch({ type: 'PREV_STATUS' });
nextButton.onclick = () => store.dispatch({ type: 'NEXT_STATUS' });

/* Callback when state is replaced */
store.subscribe(renderUI);
