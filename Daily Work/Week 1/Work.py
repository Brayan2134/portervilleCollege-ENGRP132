

# FIbonachi Sequence
# 0, 1, 1, 2, 3, 5, 8

def fibo(n):
    # base case a
    if n == 0:
        return 0
    
    # base case b
    elif n == 1:
        return 1
    
    else:
        return (fibo(n-1) + fibo(n-2))


#print(fibo(4))


# Recursibe code for solution to sequence
# 1,3,9,27,81,...
# Formuka: previous iteration *3

def reco(n):
    # base case 1
    if n == 0:
        return 1
    
    else: 
        return reco(n-1) * 3


#print(reco(8))

#Factorial Recursive function
# 0! = 1
# 1! = 1
# 2! = 2 * 1
# 3! = 3 * 2! (2 * 1)

# Formula: input number * (factorial of the input number - 1)

def factorialsFun(n):
    if n == 0:
        return 1

    if n == 1:
        return 1
    
    else:
        return (n * factorialsFun(n-1))


#print(factorialsFun(3))


# Towers of Hanoi recursive function
# Given :(

def tower(n, source, dest, temp):
    if n==1:
        print("Move disk from", source, "to ", dest+".")
    
    else:
        tower(n-1, source, temp, dest)
        tower(1, source, dest, temp)
        tower(n-1, temp, dest, source)

def hanoi(n):
    tower(n, "A", "C", "B") 

print(hanoi(3))