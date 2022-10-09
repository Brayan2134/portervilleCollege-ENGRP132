Array = [20,12,10,15,2]

def descendingSelectionSort(Array):
    for i in range(len(Array) - 1):
        min = i

        for j in range(len(Array)-1, i, -1):
            if(Array[j] > Array[min]):
                min = j

        if(min != i):
            Array[i], Array[min] = Array[min], Array[i]
    return Array

print(descendingSelectionSort(Array))