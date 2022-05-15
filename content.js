var isDebug = true;
var intervalTime = 9 * 1000; // 9 seconds
var isAllowSendRealToken = true; // Allow to send non-anonymous too?

function checkPickTimeToken() {
  if (isDebug)
    console.log("PickTime: checkPickTimeToken start");

  // Try to get user session
  userAnonymToken = sessionStorage.getItem("user.session-token");
  userRealToken = localStorage.getItem("user.tkn");

  // We prefer anonymous token, but will take real token if allowed (isSendAnonymousOnly == false)
  newToken = "";
  if (userAnonymToken) {
    if (isDebug)
      console.log("PickTime: got anonymous token");
    newTokenType = "anonymous";
    newToken = userAnonymToken;
  }
  else {
    if (isAllowSendRealToken)
      if (userRealToken) {
        if (isDebug)
          console.log("PickTime: got real token");
        newTokenType = "real";
        newToken = userRealToken;
      }
  }
  
  if (newToken) {
    // Get previously sent token
    previousToken = localStorage.getItem("picktime_token_sent");

    if (previousToken != newToken) {
      console.log("PickTime: time to update token");

      localStorage.setItem("picktime_token_sent", newToken);

      fetch('https://picktimebot.com/auth_token', {
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
          body: JSON.stringify({token: newToken, type: newTokenType})
        }).then(res => res.json())
          .then(res => console.log("PickTime: " + res));

    }
  }
  if (isDebug)
    console.log("PickTime: checkPickTimeToken end");
}

if (isDebug)
  console.log("PickTime: js installed");

checkPickTimeToken();
setInterval(checkPickTimeToken, intervalTime);