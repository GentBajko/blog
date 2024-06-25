Development’s been slow in the last couple of weeks. Mainly because I have realized that my workflow has been kind of very, very wrong in a couple of ways, which has made me stop typing and start thinking more.

I have come to realize that there are worse things in software than not being able to fix a bug, because your design has been so shitty that you’d have to change your whole codebase.

# The Uh-ohs

The problem starts with not being able to merge to the main branch until the discord client and API are in a runnable state, which in turn leads to the Character class not being finished, hence it cannot be executed either.

![develop vs main in squashed PRs](https://i.imgur.com/KLa1GDA.png)

In short, the last update to the main branch has been over 5 months ago, leaving the bot safely online, but quite primitive in terms of features (but at least it runs, eh?). Unit testing is also about 3 refactor overhauls by now.

So, in short, right now, I have nothing to show AND nothing to test. Thinking about it a couple of months ago, I severely underestimated the sheer amount of development effort this would take for a 1-man army, so in a state of sheer bias toward the end-goal I thought it would “hurt me” to overwrite a working demo. This is going to come as quite a shocker… it does not.

So what can I do besides funding and hiring other developers? Skip a lot of steps, straight ahead to the API and the Discord bot even if the features are not there yet. What I’ve come to realize today is this:

You can release a preview environment on something and have something ACTUALLY tangible, and then backtrack and add features and enrich it. What you cannot do, is hit the gas and fast-forward towards a release when the time actually requires it.

So for now the solution is simple. I will finish implementing the Features (D&D ones) that I have started, and then skip a couple of steps towards the API and Bot.

## Conclusion

I am still not sure this is going to be the best decision and if it will introduce a lot of tech debt. I will think this over a bit in the following days, or when I (hopefully in this lifetime) implement all the Features.