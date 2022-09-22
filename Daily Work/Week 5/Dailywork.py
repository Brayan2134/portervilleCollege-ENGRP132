#
# MONTE CARLO SIMUATIONS:
# 
# Broad class of cimputational algoithms that rely
# on REPEATED RANDOM SAMPLING to 
# obtain numerical results.
# 
# #

#
# Problem 1:
# Suppose you wanted to know the probability of rolling a
# dice 6 tinsa abd getting a different roll every time.
# 
# If this doesn't work, you lose!#

from logging import raiseExceptions
import random
answers = [0,0,0,0,0]
realAnswers = [0,1,2,3,4,5]
wins = 0
loss = 0
MAX_ITERATIONS = 6

finishedGame = False

def rollDice():
    return random.randint(0,5)

def areAllAnswersUnique(answers):
    answers.sort()
    correctAnswers = 0

    if answers[0] == realAnswers[0]:
        correctAnswers = correctAnswers + 1
    
    if answers[1] == realAnswers[1]:
        correctAnswers = correctAnswers + 1
    
    if answers[2] == realAnswers[2]:
        correctAnswers = correctAnswers + 1
    
    if answers[3] == realAnswers[3]:
        correctAnswers = correctAnswers + 1

    if answers[4] == realAnswers[4]:
        correctAnswers = correctAnswers + 1

    if answers[5] == realAnswers[5]:
        correctAnswers = correctAnswers + 1

    if correctAnswers == 6:
        return True
    
    else:
        return False

for z in range(0,5000):
    for i in range(0, MAX_ITERATIONS):
        answers[int(i)] = rollDice()

    finishedGame = areAllAnswersUnique(answers)

    if finishedGame == False:
        loss = loss + 1
    if finishedGame == True:
        wins = wins + 1

    print("Total wins: ", wins, " Total loss: ", loss)

        
