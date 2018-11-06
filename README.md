# Renê's Challenge

In this challenge, I developed a web application that plots a line chart based on some manually input data.

The input data is a sequence of events. The data will be manually input by the final user. Based on the input sequence of events, you may generate a time based line chart containing one or more series.

This app is not the full version as it was asked. As I am new to programming I would need a little more time to implement all functionalities. With that said, I made the choice of focusing on delivering something that worked and would still allow you to evaluate my ability and familiarity with tools and best practices.

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

-   right now the chart only uses the inputs from start and data to be generated, but I understand that timestamp, span and stop should act on it as well
-   it can only take one 'start', but multiple 'data' events
-   I am confident that with a little more time I could implement all the functionalities, I didn't get stuck on any part but I did take some time to figure out the logic behind it, and because this was my first time developing an app like this i didn't estimate the time correctly.
-   I didn't have time to write tests, and that is something I am still learning, I have some knowledge of jest but very little
-   I am also not familiar with the methods to protect the app to deal with huge amounts of data

## How to use

1. select the type of event
2. on event 'start' add the groups and selects as if completing the array (no need to use quotes) EX: min_response_time, max_response_time
   press ENTER to submit
3. even though it won't affect the chart, you can select 'span' and render this event
4. select 'data'. you will see that the answers from 'start' are here rendered as input fields (inputs can be written without quotes)
5. just like 'span' the 'stop' won't affect the chart, but you can select to reset part of the state and reset 'data'
6. when you are done, press the button 'generate chart' to make the chart component render

## Features

-   project created using create react app
-   react-chartjs-2 used to generate chart

## Design Choices

I added an input component to make it easier for the user to input the data and for tha app to deal with it.

As it is not a functionality that is not essencial for the app, I chose to leave 'draggable to resize' functionality behind for now.

## Possible Future

If I were to continue developing the app a would:

add verification to the input fields to make shure it is written conrrectly;

make it possible to delete an input that was submitted incorrectly;

make the span and stop events fully functional;

fix the chart's height;

add propTypes to make it less vulnerable;

make it possible to generate multiple charts based on the different 'start' events;

render an empty chart if there was no data input yet;

write tests.
