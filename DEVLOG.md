June 25th: (Retroactive Entry) After a month of no coding at all, I was given an at-home assignment to do as part of a job interview. It reignited my interest in building apps just for the sake of building apps. I wanted to build a website without nav bars. So, here it is.
<br />
June 26th: (Retroactive Entry) Had some issues implementing RTK Query because the docs are pretty weak. But hey I’m working it with. I couldn’t find an effective way to test that the theme was actually being applied because I’ve chosen to use SASS instead of styled components.
<br />
I found a good [toggle component tutorial](https://dev.to/devggaurav/let-s-create-a-custom-toggle-switch-using-html-and-css-33df).
<br />
June 27th: I wanted to use absolute imports without it being unclear what's an installed package and what's a module in this codebase, so I moved everything into the app directory. I was super tempted to name the app directory "@" but I thought that would be confusing to anyone who sees the codebase.
<br />
I found out the API I wanted to use for IMDB movies actually requires payment after 1000 queries or something and payment is auto-billed. So… screw that. I found a list of free APIs and went with NY Times Best Sellers instead. In the end I just need stuff from an API to display on the screen. I also modified that toggle component so its architecture is more like a real life toggle switch (the whole slider moves back and forth as one piece). As I built out the Best Sellers page I didn’t write any tests. So sue me. I’m not at work.
<br />
Just kidding. I’lll write some and try to remember to use TDD. I just get excited, you know?
<br />
Oh… I deployed this app to Heroku and as a result had to move all the eslint-related dev dependencies to the dependencies object. So lame.
<br />
Decided to play around with some navigation ideas. First one reminds me of a circus tent. Can be seen in [this commit](https://github.com/jayporta/no-navbars/commit/8f11be5dbd57a40ac366cdae5cb1c5ab160e3eb2)
<br />
June 28th: Fallen into the working with only visual testing trap again. I wanted to use test-driven-development but again, I didn't. At first I only wanted to adjust the layout which would be all CSS. But then I realized it would be cool if the app could detect the operating system theme, so i worked on that which led to me modifying the entire theme store and adding a "use system theme" checkbox. As a result the way I set the default theme and toggle themes is better since it's now all in the theme slice. But... should have used TDD.
<br />
As for the layout, I got rid of the grid and went with a regular list. I still don't really like it. This layout is actually kind of tricky because the book covers are not always the same width. I'm not a designer, so I found it difficult to find a good layout. I ended up removing the isbns and adding the description and publisher. There's still a lot of whitespace in the horizontal (wide screen) layout. In vertical (mobile) it has kind of a Reddit layout in which the cover image is cut off so I could fit its width in a card. Ironic how I want to do something dumb like build a site with no navbar but then use the most played out UI on the internet. 🤷‍♂️
<br />
Anyway, I haven't been sleeping well and have been working on this all day and then staying up until like 3am working on it more. I was already not sleeping well, now I just have something to while not sleeping.

Quick back story: My daughter and I have been living in Taiwan for two years. I left the company I was working for over work culture issues that were eating away at me (I'm sure a lot of people have been through something like that). There aren't even half as many job opportunities for developers out here as there are in America, and traditional work culture here is a lot different than it is in the US (I knew this going into it, but my previous company was an outlier) so I decided to go back to the US. Taiwan is a great place to live, but I love what I do and I want to get better at it. I don't want to throw my career away by teaching English for low pay in 補習班 (basically after-school tutoring... it translates to "cram school" but I wouldn't call it that) just so we can stay here. Since my lease ends in one month, I'm super stressed over finding a good role and finding an apartment back home in time.
<br />
I'm going to take a couple of days off from working on this. I have some interviews coming up and I don't want to burn myself out.
