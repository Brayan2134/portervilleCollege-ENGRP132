# Depth first searches

# pre order: Root, left, right

# In order: left, root, right

# post order: left, right, root

graph = {
    '5' : ['3','7'],
    '3' : ['2','4'],
    '7' : ['8'],
    '2' : [],
    '4' : ['8'],
    '8' : []
}

visited = set()

def depth_first_search(visitied, graph, node):
    if node not in visitied:
        print(node)
        visited.add(node)
        for neighbor in graph[node]:
            depth_first_search(visitied, graph, neighbor)

print("Following is depth first search")
depth_first_search(visited, graph, '5')


