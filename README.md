# Renê's Challenge

In this challenge, i developed a web application that plots a line chart based on some manually input data.

The input data is a sequence of events. The data will be manually input by the final user. Based on the input sequence of events, you may generate a time based line chart containing one or more series.

this app is not the full version as it was asked. As i am new to programming i would need a little more time to implement all functions. with that said i made the choice of focusing on delivering something that worked and would still allow you to avaluate my ability and familiarity with tools and best practices.

As it is the app can:

-   take inputs
-   render dynamic input fields according to whats asked in the start input after it is submitted
-   render the inputs as html
-   and, if the inputs are made correctly, dynamicly generate a chart on the push of a button.

## Installation

requires node.js

1. Run "npm install" in the folder
2. Run "npm start" to view the project

## Observations

-   right now the chart only uses the inputs from start and data to be generated, but i understand that timestamp, span and stop should act on it as well
-   it can only take one 'start', but multiple 'data' events
-   i am confident that with a little more time i could implement all the functionalities, i didn't get stuck on any part but i did take some time to figure out the logic behind it, and because this was my first time developing an app like this i didn't estimate the time correctly.
-   i didn't have time to write tests, and that is something i am still learning, i have some knowledge of jest but very little
-   i am also not familiar with the methods to protect the app to deal with huge amounts of data

## How to use

1. select the type of event
2. on event 'start' add the groups and selects as if completing the array (use single quotes) EX: 'min_response_time', 'max_response_time'
   press ENTER to submit
3. even though it wont affect the chart, you can select 'span' and render this event
4. select 'data'. you will see that the answers from 'start' are here rendered as input fields (inputs can be written without quotes)
5. just like 'span' the 'stop' wont affect the chart, but you can select to reset part of the state and reset 'data'
6. when you are done, press the button 'generate chart' to make the chart component render

## Features

-   project created usin create react app
-   react-chartjs-2 used to generate chart

## Design Choices

I added a input component to make it easier for the user to input the data and for tha app to deal with it.

as it is not a function that is not essencial for the app to be functional i chose to leave 'draggable to resize' functionallity behind for now

## Possible Future

If i were to continue developing the app a would:

add verification to the input fields to make shure it is written conrrectly

make it possible to delete an input that was submitted incorrectly

make the span and stop events fully functional

fix the chart's height

add propTypes to make it less vulnerable

make it possible to generate multiple charts based on the different 'start' events

render an empty chart if there was no data input yet

write tests
