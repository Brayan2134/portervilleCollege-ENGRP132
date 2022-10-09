from memory_profiler import profile

@profile
def main():
    print("Right Riemann Sum Calculator")
    FUNCTION = input("Enter an equation (note raising to a power is ** NOT ^): ")
    a = eval(input("Enter a: "))
    b = eval(input("Enter b: "))
    n = eval(input("Enter number of rectangles: "))

    delta_x = (b - a) / n # Distance between sqaures
    finalValue = 0

    for i in range (1, n+1, 1):
        f_of_value = i * delta_x # find what interval to be on
        finalValue = finalValue + eval(f"{FUNCTION}", {"x" : f_of_value}) # Find value at that point in interval, add it up
        print("Interval: ",f_of_value, " Value: ", eval(f"{FUNCTION}", {"x" : f_of_value}), " sum so far: ", finalValue)
    
    print("\nAll values have been added. Now multiply by \delta x")
    finalValue = finalValue * delta_x
    print("\nFor: ", FUNCTION, " with endpoints: [", a, " ", b, " ]: with ", n, " number of rectangles")
    print("\nApproximation = ", finalValue)

main()