# Digital + Analog Clock



https://github.com/Vaibhav-Kolhe14/Digital-Analog-Clock/assets/135616354/95c7fd1f-f744-4fda-8d88-253d41aafd3b



## Description

This project implements a digital and analog clock with a dynamic background color. The JavaScript file `script.js` contains the logic for updating the clock and changing the background color.

### Functionality

#### `getcolor()`

The `getcolor()` function generates a random RGB color value to be used as the background color for the clock. It calculates three random values between 0 and 255 for the red, green, and blue components of the color.

#### Calculating Clock Hand Angles

The clock hands' angles are calculated based on the current time using the `updateClock()` function. It retrieves the current hour, minute, and second and computes the angles for the hour, minute, and second hands.

#### Rotating Clock Hands

The `rotateLine(element, angle, value)` function rotates the clock hands (hour, minute, and second) to their respective angles calculated in the `updateClock()` function. It also updates the clock numbers accordingly to reflect the current time.

#### Synchronizing Intervals

The `updateClockAndColor()` function synchronizes the intervals for updating the clock and changing the background color. It calls both `updateClock()` and `getcolor()` functions to update the clock and background color simultaneously.

