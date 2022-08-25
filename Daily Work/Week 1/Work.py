

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

def reco(n):
    if n == 0:
        return 1
    
    else: 
        return reco(n-1) * 3


print(reco(8))