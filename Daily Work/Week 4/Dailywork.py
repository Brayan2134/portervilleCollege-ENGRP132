#
# Genetic Algo:
# 
# 1. Generate opulation of solution
# 2. Measure fitness of solution
# 3. Select best solutions and disregard the rest
# 4. Recombine the solutions to make new solutions
# 5. Mutate a small number of elements in the solutions by changing their values.
# 6. Return to step 2 and repeat.
# 
# 
# Stop condition:
# - Minimun threshold
# - Completing set of iterations
# - Reaching deadline#

import random
import time
import statistics

# CONSTANTS (Grams)
GOAL = 50000
NUM_RATS = 20 # Number of adult breeding rats in each generation
INITIAL_MIN_WT = 200
INITIAL_MAX_WT = 600
INITIAL_MODE_WT = 300
MUTATE_ODDS = 0.01
MUTATE_MIN = 0.5
MUTATE_MAX = 1.2
LITTER_SIZE = 8
LITTERS_PER_YEAR = 10
GENERATION_LIMIT = 500

# Ensure even-number of rate for breeding pairs:
if NUM_RATS % 2 != 0:
    NUM_RATS += 1

def populate(num_rats, min_wt, max_wt, mode_wt):
    # INIT a population with triangular distribution of weights
    return [int(random.triangular(min_wt, max_wt, mode_wt)) for i in range(num_rats)]

def fitness(population, goal):
    # meausre population fitness based on an attribute mean vs target
    avg = statistics.mean(population)
    return (avg / goal)


def select(population, to_retain):
    # Cull a populaiton to contain only a specificed number of members
    sorted_population = sorted(population)
    to_retain_by_sex = to_retain // 2
    members_per_Sex = len(sorted_population) // 2
    females = sorted_population[:members_per_Sex]
    males = sorted_population[members_per_Sex:]
    selected_females = females[-to_retain_by_sex:]
    selected_males = males[-to_retain_by_sex:]
    return selected_males, selected_females

def breed(males, females, litter_size):
    # Crossover genes among members of a population
    random.shuffle(males)
    random.shuffle(females)
    children = []
    for male, female in zip(males, females):
        for child in range(litter_size):
            child = random.randint(female, male)
            children.append(child)
        return children

def mutate(children, mutate_odds, mutate_min, mutate_max):
    # Randomly alter rat weights using input odds and fractional changes
    for index, rat in enumerate(children):
        if mutate_odds >= random.random():
            children[index] = round(rat * random.uniform(mutate_min, mutate_max))
    
    return children

def main():
    # Initialize population, selecy, breed, and mutate. Display results
    generations = 0

    parents = populate(NUM_RATS, INITIAL_MIN_WT, INITIAL_MAX_WT, INITIAL_MODE_WT)
    print("Initial population weights = {}".format(parents))

    popl_fitness = fitness(parents, GOAL)
    print("Initial population fitness = {}".format(popl_fitness))
    print("Number to retain = {}".format(NUM_RATS))

    ave_wt = []

    while popl_fitness < 1 and generations < GENERATION_LIMIT:
        selected_males, selected_females = select(parents, NUM_RATS)
        children = breed(selected_males, selected_females, LITTER_SIZE)
        children = mutate(children, MUTATE_ODDS, MUTATE_MIN, MUTATE_MAX)
        parents = selected_males + selected_females + children
        popl_fitness = fitness(parents, GOAL)
        print("Generation {} fitness = (:.4f".format(generations, popl_fitness))
        ave_wt.append(int(statistics.mean(parents)))
        generations += 1


    print("average weight per generation = {}".format(ave_wt))
    print("\number of generatuibs = {}".format(generations))
    print("number of years = {}".format(int(generations / LITTERS_PER_YEAR)))


if __name__ == '__main__':
    start_time = time.time()
    main()
    end_time = time.time()
    duration = end_time - start_time