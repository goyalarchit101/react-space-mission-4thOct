import heapq

def dijkstra(graph, start, end, budget):
    min_dist = [float('inf')] * len(graph)
    min_dist[start] = 0
    heap = [(0, start)]

    while heap:
        current_dist, node = heapq.heappop(heap)

        if node == end and current_dist <= budget:
            return current_dist

        if current_dist > min_dist[node]:
            continue

        for neighbor, road_length, toll in graph[node]:
            if current_dist + toll <= budget and current_dist + road_length < min_dist[neighbor]:
                min_dist[neighbor] = current_dist + road_length
                heapq.heappush(heap, (min_dist[neighbor], neighbor))

    return -1

def main():
    num_countries = int(input())
    
    for _ in range(num_countries):
        budget = int(input())
        num_cities = int(input())
        num_roads = int(input())
        
        graph = [[] for _ in range(num_cities)]
        
        for _ in range(num_roads):
            source, dest, length, toll = map(int, input().split())
            graph[source - 1].append((dest - 1, length, toll))
        
        result = dijkstra(graph, 0, num_cities - 1, budget)
        print(result)

if __name__ == "__main__":
    main()
