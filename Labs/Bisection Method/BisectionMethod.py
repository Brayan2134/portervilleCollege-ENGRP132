#
# Name: Quevedo Ramos, Brayan
# Class: ENGRP132
# Topic: Bisection Method
# Date: 01/Sept/2022
#
#
# Purpose: To recreate the Bisection Algorithm Method by hand
#
#
# Bisection Method:
# Look for interval where there's a root via Intermediate Value Theorm
# Example: F(a_1) = -F(b_1)
#
# Then find midpoint
# Example: f[(a+b)/2] = 0
# If positive, (a + b) ! 0, both values must be moved
# 
# f(x) = x^2-8
# 
# 
# Project Requirements:
# ---------------------
# . Get user input to find root of polynomial f(x) [f(x) is given]
# . Get user input for the endpoints
# . Get a tolerance within (less than) 10^-4
# 
# 
# CURRENT ISSUES:
# ---------------
# .only way to break program is to have no root between a and b (includes non-real roots)#

from tkinter import E

TOLERANCE_AS_DIGITS = 4 # Tolerance level in digit form (e.g: 0.001 has 3 digit levels)
TOLERANCE = (10 ** -4) # Tolerance Level for program (can be changed)

# Main program to run the Bisection Method Algorithm
def bisectionMethodProgram(init_a, init_b, EQUATION):
    a = init_a # Left Endpoint (x-axis value)
    f_of_a = 0 # Left Endpoint (y-axis value)

    b = init_b # Right Endpoint (x-axis value)
    f_of_b = 0 # Right Endpoint (y-axis Value)

    midpoint = 0 # Midpoint (x-axis value)
    f_of_midpoint = 0 # Midpoint (y-axis value)


    #print("Init guess a: ", init_a, " Init guess b: ", init_b, " Init midpoint: ", midpoint)

    while ((abs(f_of_b-f_of_a) > TOLERANCE) or (f_of_b - f_of_a == 0)):
        f_of_a = eval(f"{EQUATION}", {"x" : a})
        f_of_b = eval(f"{EQUATION}", {"x" : b})

        print(a, " a is: ", f_of_a)

        # If both of the y-values are negative or positive
        # on (a,b), then there cannot be a root in-between them.
        # One of the endpoints must change so that
        # the condition is met
        if ((f_of_a * f_of_b) > 0) and ((f_of_a * f_of_b) != 0):
            a = b
        
        # Assuming one component is negative, and the other
        # is positive, find midpoint of (a,b).
        # Then, calculate value of midpoint.
        # Finally, replace a or b with the midpoint
        # Note: When replacing a or b, the signs must correspond.
        midpoint = (a + b) / 2
        f_of_midpoint = eval(f"{EQUATION}", {"x" : midpoint})

        print("f(a): ", f_of_a, " f(b): ", f_of_b, "f(midpoint): ", f_of_midpoint)

        # These are the settings to see which variable (a or b) is going to
        # be replaced with midpoint.
        # First two statements are for root being positive.
        # Second two statements are for root being negative.
        if (f_of_midpoint < 0) and (f_of_a < 0):
            a = midpoint
        elif (f_of_midpoint > 0) and (f_of_b > 0):
            b = midpoint

        elif (f_of_midpoint > 0) and (f_of_a > f_of_midpoint):
            a = midpoint
        elif (f_of_midpoint < 0) and (f_of_midpoint > f_of_b):
            b = midpoint
        else:
            print("Something went wrong...")
    
        print(" Current a: ", a," Current b: ", b," Current midpoint: ", midpoint, "Current f(midpoint): ", f_of_midpoint)


    print("\nAfter running this program, we can safely assume that the midpoint of the function is: ", round(midpoint, TOLERANCE_AS_DIGITS))
    print("-----------")
    print("It is within ", TOLERANCE, " of the actual result.")

    


# ALL FUNCTIONS ARE CALLED VIA INHARIT. ON MAIN!!!
def main():
    print("Hello and welcome to root finding generator using Bisection Method Algorithm")

    # Init guesses for both endpoints
    EQUATION = input("Enter an equation (note raising to a power is ** NOT ^): ")
    INIT_GUESS_A = eval(input("What is your initial guess for the left endpoint? (a): "))
    INIT_GUESS_B = eval(input("What is your initial guess for the left endpoint? (b): "))
    bisectionMethodProgram(INIT_GUESS_A, INIT_GUESS_B, EQUATION)


#-------------------------
if __name__ == "__main__":
    main()