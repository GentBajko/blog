The project has become so big that it has clouded my thinking ability to its very core. I’ve basically written myself in a corner. Well, not now, but I will be in too deep with refactoring the backend design. The tech debt is hibernating and it will soon wake up and devour my EC2 instance (or my bank account).

# The Problem(sss)

Following inheritance design principles has backfired quite a bit, despite my best efforts to try and decouple components into smaller Single-Responsability objects, the problems popped up when I started (finally) thinking of the actual end process and how the flow would look like. I’m using every object as an entity part of a bigger aggregator, which inherently requires me to load every single component from the database to instantiate the root aggregate object. Let's take a look at the current design.

### **Let's say Player1 wants to cast Fireball on NPC1:**

![Untitled](https://dicemaster-dev.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F52c212b0-78e1-49ae-ae77-4e3824cf2414%2F67b5c4d4-a956-4a60-a115-0a37770b3302%2FUntitled.png?table=block&id=28306fee-c0bf-4816-a13f-bb7d02ad062f&spaceId=52c212b0-78e1-49ae-ae77-4e3824cf2414&width=2000&userId=&cache=v2)  

The issue becomes apparent pretty quickly when you consider what the Character class contains. As shown in the image, Character is the aggregate root of all things related to a specific character, meaning it contains about 10 other objects inside of it (Statuses, Spellcasting, Ability Score, Inventory, etc.) and that to actually initiate the class you need all of them initiated too. It becomes even worse when you consider than Fireball can hit a room full of people.

In a system where (hopefully) hundreds or thousands of players will be playing on their separate campaigns, this will force me to load and unload the data for each character for every single (tiny) action.

To make matters even worse, Character isn’t even the biggest aggregate root. Campaign is 😊.

# Possible Solution(sss)

The current design will leave me with 3 choices (The Good, the Bad and the Ugly… in order):

1. Modularity. Remove all aggregate roots and decouple everything. This will allow me to:
    1. Have easier unit testing (lifesaver when working with discord bots).
    2. Have a cheaper plan which doesn’t include AI completion (player groups with their own Game Master).
    3. Low overhead memory (hence, cheaper servers).
    4. Low database costs (although I don’t deserve this - see image above).
2. Keep it as is… Joke’s over. On to #3.
3. Keep the campaigns in memory and save the data on every action taken by the players (or in batches). Use a caching mechanism like TTL Cache and give each campaign a 20-minute window to act and use commands, else evict them from memory.
    1. This will increase overhead memory and drive costs up (again, well deserved).
    2. It will drastically lower database cost (more than solution #1 even).
    3. Requires much less effort on setting up databases because:
        1. It eliminates the need for complex database configurations, such as checking when a character is able to react to incoming events by 3rd parties (which will be a nightmare in solution #1).
        2. It eliminates the immediate need for indexing (??????? or does it??????????).

# Conclusion

While the best-case scenario would be to go with solution #1 and work on modularity, that would mean a lot of code refactoring and a lot more time spent. I’ve already spent 8 months on this, and I want to get player feedback as soon as possible. The best-case scenario would look like this:

![Untitled](https://dicemaster-dev.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F52c212b0-78e1-49ae-ae77-4e3824cf2414%2F20612b7a-b227-4d1f-895b-0b78ec16b6a3%2FUntitled.png?table=block&id=15890d19-49be-4aac-9e72-85478aef8b39&spaceId=52c212b0-78e1-49ae-ae77-4e3824cf2414&width=2000&userId=&cache=v2)

You can see much less arrows here. That’s good. Less arrows == good.

The conclusion of this is pretty simple. I take the L and (temporarily) go with solution #3. Especially now that I am still developing this alone, I need something which is very flexible, cheap and doesn’t become impossible to code and test within a lifetime.

Turns out OOP for games played through an HTTP connection is not as good as they seem to be when you place all the memory issues on the player, and your database is basically a pickled file. Who woulda thunk.