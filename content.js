var redirects = {
  "https://www.amazon.com/":"https://trueblue.jetblue.com/group/amazonOffer",
  "https://www.airbnb.com/":"https://www.deltaairbnb.com/"
};

console.log(window.document.title)

// if it matches pattern defined above
if( redirects[window.location.href] ) {
  // send message to redirect
  chrome.extension.sendRequest({redirect: redirects[window.location.href]});
}
