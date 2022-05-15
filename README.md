# PickTime Helper - by the citizens, for the citizens

### TL;DR
This is a simple Chrome extension to help PickTime bot survive with the help of the citizens. It will collect valid tokens from your MyVisit session and use it to feed the PickTime bot. 

### Background
As you all know, around May 2022 Callflow, the company behind MyVisit, added an anti-bot mechanism to protect its API against bots. In addition to CAPTCHA v3, they also shortened the session time to 10 minutes. This killed all the existing bots that helped to ease the Israeli citizens' life by finding an available slot for them in the various Israeli government websites.

It sounded like a cool challenge to address and so I began to think about some different ways we could solve this. The solution I propose is to use the citizens' kindness to keep the bots alive! We are using real people that use the regular Israel governmental services to feed the bots with real sessions. In return, the bots help other citizens by mapping and finding them empty slots so they can easily register.

### What it will send, and where
The chrome extension will only operate on the [MyVisit](https://MyVisit.com) website. It will extract the current user session and send it to [PickTime Bot](https://picktimebot.com) servers. PickTime bot will use this session to query all the currently available slots and will display it nicely for other citizens for their convenience.

### So it will send my session token??
Yes, but you can also create an anonymous session if you don’t want to send your mobile-phone-related session. Anyway sessions are only good for 10 minutes and PickTime deletes them after they expire.

You can also ask the chrome extension not not send “real” tokens, only anonymous tokens. Change `isAllowSendRealToken` to `true` or `false` based on your preference. Default is `true` because again, the sessions are only good for 10 minutes.

### How to install the chrome extension
1. Clone the repository or simply download it from [here](https://github.com/SharonBrizinov/PickTime/archive/refs/heads/master.zip)
2. Save it in a directory on your computer
3. Open Chrome and go to `chrome://extensions` (Chrome Settings → Extensions)
4. Then - 
    a. Enable _“Developer Mode”_
    b. Click _“Load unpacked”_ and select the directory you saved earlier
    c. Log in (anonymously or with your mobile phone) to MyVisit.com
4. That’s it! Now you are helping the bot to help others!

