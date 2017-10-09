var amazon="https://www.amazon.com/";
var amazonRedirect = "https://trueblue.jetblue.com/group/amazonOffer";

console.log(window.document.title)

if (amazon == window.location.href) // if it matches pattern defined above
{
  chrome.extension.sendRequest({redirect: amazonRedirect}); // send message to redirect
}
