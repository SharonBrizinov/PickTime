function checkPickTimeToken() {
  console.log("checkPickTimeToken start");

  // Try to get user session
  userToken = sessionStorage.getItem("user.session-token");
  if (userToken) {
    userTokenSent = localStorage.getItem("picktime_token_sent");
    if (!userTokenSent || userTokenSent != userToken) {
      console.log("Time to send & update token!");

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
  console.log("checkPickTimeToken end");
}

checkPickTimeToken();
setInterval(checkPickTimeToken, 60000);