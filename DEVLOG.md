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
