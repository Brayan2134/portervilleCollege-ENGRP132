from collections import deque

letters = []

# APPEND INSERTS ITEM TO BACK OF LIST
letters.append('c')
letters.append('a')
letters.append('t')
print(letters)

# POP TAKES LAST ELEMT FROM LIST
last_item = letters.pop()
print(last_item)
print(letters)

last_item = letters.pop()
print(last_item)
print(letters)

last_item = letters.pop()
print(last_item)
print(letters)

#-------------------------
queue = (["a", "b", "c", "d"])
print("Qquene = ", queue)
queue.append("e")
print(queue)

print(queue.pop())
print(queue.pop())