def quicksort(list):
    if len(list) <= 1:
        return list
    
    pivot = list[(len(list)-1)//2]
    list.remove(pivot)

    less = []
    greater = []

    for num in list:
        if num <= pivot:
            less.append(num)
        else:
            greater.append(num)

    return quicksort(less) + [pivot] + quicksort(greater)

hello = [3,4,5,6,1,1,2,3,5,10,223,2,1]
print(quicksort(hello))