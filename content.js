var isDebug = false;
var intervalTime = 9 * 1000; // 9 seconds

function checkPickTimeToken() {
  if (isDebug)
    console.log("checkPickTimeToken start");

  // Try to get user session
  userToken = sessionStorage.getItem("user.session-token");
  if (userToken) {

    // Get previously sent token
    userTokenSent = localStorage.getItem("picktime_token_sent");

    if (!userTokenSent || userTokenSent != userToken) {

      console.log("PickTime: time to update token");

      localStorage.setItem("picktime_token_sent", userToken);

      fetch('https://picktimebot.com/auth_token', {
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
          body: JSON.stringify({token: userToken})
        }).then(res => res.json())
          .then(res => console.log(res));

    }
  }
  if (isDebug)
    console.log("checkPickTimeToken end");
}

checkPickTimeToken();
setInterval(checkPickTimeToken, intervalTime);