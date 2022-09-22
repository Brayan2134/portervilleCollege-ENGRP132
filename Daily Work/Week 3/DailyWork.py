#
# EUCLIDS ALGORITHM:
# 
# Used for finding the greatest common divisor between two numbers.
# (16,24): GCF is 8 
# 
# Find CGF of 12 and 30
# Decide largest num.
# Divide larger / smaller
# If remainder is 0 then you're done
# 
# Else:
#   Divisor / remainder
#   repeat until remainder = 0.#


#
# RUSSIAN PEASANT MULTIPLICATION:
# 
# Take two numbers being multiplied, (x,y)#


havingColumn = []
doublingColumn = []


def russianPearentMult():

    # Inital Conditions
    x = eval(input("Enter first number to multiply: "))
    y = eval(input("Enter second number to multiply: "))
    total = 0

    # Insert initial Conditions into array
    havingColumn.insert(0, x)
    doublingColumn.insert(0, y)

    # Assuming you have to divide less by 100 times
    # Create "column" of halving
    for i in range(1,100,1):
        tempHalf = (havingColumn[i - 1] / 2)
        tempHalf = int(tempHalf)
        havingColumn.insert(i, int(tempHalf))

        if tempHalf == 1: # Check of halving column has reached 1
            break

    print(havingColumn)

    # Double the previous number depending on how many iterations there are
    lenColumn = len(havingColumn)

    for i in range (1, (int(lenColumn) + 1), 1):
        temp = (doublingColumn[i-1])
        temp = temp * 2
        doublingColumn.insert(i, int(temp))

    print(doublingColumn)
    print(havingColumn)
    # Check halving column to see if the number is divisable by 2
    # IF so, delete it

    for i in range(0, (int(lenColumn) + 1), 1):
        havingColumnValue = int(havingColumn[i])

        if (havingColumnValue == 0):
            havingColumn[i] = 0
            doublingColumn[i] = 0

    print(doublingColumn)

    # Add all the numbers in doubling.
    for a in range(0, len(doublingColumn) + 1, 1):
        total = total + int(doublingColumn[0])

    print(total)

russianPearentMult()