SurveyKit


Build Your Survey in a Pinch


Deployed: https://polar-fjord-39713.herokuapp.com/


For our first team project, we followed the assigned prompt to build a custom survey app, à la Survey Monkey.


The prompt


Make an app that can be used to create custom surveys (for instance, asking "what should we eat for lunch today?" or "On a scale of 0-5, how well did you understand what we just learned?") and collect the responses on a dashboard for that particular survey. Each live survey should be hosted at a unique, randomly-generated URL.


Approach


As a team, we decided to call the app “SurveyKit.” We also used a kitten icon for our logo as a play on the word "kit." For the styling, we opted for a cool color theme to evoke a calm and pleasant UI experience. We used custom Bootstrap to style the front-end as well as the [General Assembly-issued browser template] (https://git.generalassemb.ly/ga-wdi-boston/browser-template).


We started by planning our wireframes and the data modeling to determine our schema and validations. It seemed straightforward to go with this basic structure and template so we could move on to coding and styling. During the planning process, we also assigned pseudo roles to have structure and distribute tasks; they are Front-End Lead, Back-End Lead, Project Lead, and Quality Assurance. For version control, we decided to use GitHub co-founder Scott Chacon’s team workflow model, “GitHub Flow.”


Our planning documents, including our user stories, ERD, and wireframes,
can be found here: https://docs.google.com/document/d/1JZLS4SFVwl-2guNw10I9j4O9nWy22VpnurYFZH-N2y0/edit


Link to back-end repo: https://github.com/PVD-WDI-Squad-3/survey-kit-back-end


* Front-End Repo


https://github.com/PVD-WDI-Squad-3/survey-kit-front-end


* Verb URI Pattern Controller#Action


GET	/surveys/	surveys#index
GET	/surveys/1 surveys#show


* Deployed Back-End Repo



https://polar-fjord-39713.herokuapp.com/
