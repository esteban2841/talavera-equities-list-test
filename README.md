Respected srs talavera team,

A- Instructions to run the "talavera-equities-list-test" application in your local environment the project was made using reac native expo boilerplate:

1- Please go to https://github.com/esteban2841/talavera-equities-list-test, you would find my development thinking and approach to the challenge on the readme and duplicated below in the "B part"

2- Clone the repository and install the packages using npm i or yarn in case of yarn preferred package manager

3- npm run start and this would run metro bundler and open the device of your preference

--------------------------------------------//---------------------------------------

B- Below you would find the basic set up and code explaination regarding the react native code challenge having on mind the following key points:

1- Challenge business logic and code structre:


- Code structure and architecture implemented:

In this challenge I used Atomic design as development pattern architecture modularizing each view in a folder pattern following 

├── src/
│   ├── components/
│   │   ├── (EquitiesList)/atoms/
│   │   └──└──(AtomFileName)
│   │   └── (EquitiesList)/molecules/
│   │   └──└──(MoleculeFileName)
│   ├── screens/
│   │   ├── (EquitiesListOverview)

the implementation would lead easely locating any atom to be reused and intuitive in development squats

- Navigation and state management

Navigation is nested as the state management subdivided by route tree navigation, where React context and reducer native state management from react was implemented wrapping the navigation tree this would isolate collections, at the end the User panel won't have the risk to overwrite the Equities panel

│   ├── Navigation/
│   │   ├── (EquitiesNavigation) // equities tree
│   │   ├── (Navigation) //core tree

- Clean code principles used:

Naming the most significative manner each variable, 
short functions and with one purpose (utils function helpers used to give one purpose to each one),
Data structure correctly used ( an example on hashing objects to avoid if statements),
Refactor code constantly ( you would see commits on the git branch history with the keyword Refactored or Refactor to specifically improve the code structure using minification or simply improvind readability),


- TYPESCRIPT usage: 

In order to have a better approach for any developer on components re-utilization I implemented typescript, this would infer meanwhile development processes to make the develop curve faster

2- UI implementation, routing system using tabs

On mobile applications is easier to emulate OS routing as android having tab bottom tabs is easier to adapt to the application flow so In this app was implemented in that way, also having buttons making contrast from other ui html tags, the equities list was rendered in a scrollable tag to have that part of the aplication scrolling and the tab is always visible and accesible as well as other features.


3 - React native good practices

- Having hashing styles using StyleSheet from react native make most effective css assertions as well as icon rendering using this pattern insted of using IF statements

- The global state management protects excesive re-renders due to the usage of useEffect mutations and dependencies, also prop drilling call backs to mutate the state on nested tree components like buttons and having more controled event emmitters

- cache was not implemented since there are none api requests and the compilation of the json dummy data is synchronous, but its an aspect to have on mind for a seach filter in higher demanding apps





