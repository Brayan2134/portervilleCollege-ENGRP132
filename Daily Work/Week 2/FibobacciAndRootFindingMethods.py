import functools
@functools.lru_cache

# #
#
# Fibonacci Sequence without Memoization (cashing)
#
# Fib sequence: 1,1,2,3,5,8,13,...
# For index: 0,1,2,3,4,5,6,...
# 
# #


# Fib sequence without cashing
def fib_noMem(n):

    # base case 1
    if n == 1:
        return 1

    # base case 2
    if n == 2:
        return 1

    else:
        return (fib_noMem(n-1) + fib_noMem(n-2))


#-------------------------------------
# PRINT FIRST 99 TERMS OF FIB SEQUENCE
#for n in range(1,100):
    print(n, ": ", fib_noMem(n))
#-------------------------------------


##
# 
# Explicit memoization requires:
# 
# Create dictionary -- var = {}
# 
# Search within dictionary -- if value in dict
# 
# 
# Storing -- casheDict[inputvalue] = outputValue
# 
# #


fib_cashe = {} # Hash table


def fib_explMem(n):

    # Search in hash table to see if value has already been computed
    if n in fib_cashe:
        return fib_cashe[n]

    # BASE CASE NOT ACCOUNTED FOR N > 1

    # base case 1
    elif n == 1:
        return 1

    # base case 2
    elif n == 2:
        return 1
    
    else: 
        fib_cashe[n] = (fib_explMem(n-1) + fib_explMem(n-2)) # cashe iteration
        return (fib_explMem(n-1) + fib_explMem(n-2))


#---------------------------------------------------------------
#for i in range(1,101):
    print(i, " : ", fib_explMem(i))


#print("100 : ", fib_explMem(100)) # Test to see if cashe worked!
#----------------------------------------------------------------


#
# Cashing in Python using libraries
# 
# requirements:
# import functools
# @functools.lru_cashe (on top of function)
# #

def fib_auto(n):

    # base case 1
    if n == 1:
        value =  1

    # base case 2
    elif n == 2:
        value =  1

    else:
        value =  (fib_noMem(n-1) + fib_noMem(n-2))
        
    return value


#----------------------------------
#for i in range(1,100):
    print(i, " : ", fib_auto(i))
#----------------------------------


#
# ROOT FINDING METHODS
# 
# Newtons-Raphson Method
# Bisection Method
# #


#
# Tolerance:
# Error you're willing to accept into system.
# 
# How to find Tolerance:
# Look at difference between iterations
# abs(x_n - x_(n-1)) < Tolerance
# 
# Intervaled solutions, look at the size of the interval
# abs(a-b) < Tolerance
# 
# Look at difference between abs(f(x_n)) < Tolerance#


#
# Newtons Method
# Start with initial guess (x)_0
# Use x_0 to compute x_1
# 
# Formula:
# x_n = x_(n-1) - [f(x_(n-1))/f'(x_(n-1))]#


#
# Bisection Method:
# Look for interval where there's a root via Intermediate Value Theorm
# Example: F(a_1) = -F(b_1)
#
# Then find midpoint
# Example: f[(a+b)/2] = 0
# If positive, (a + b) ! 0, both values must be moved
# 
# f(x) = x^2-8#