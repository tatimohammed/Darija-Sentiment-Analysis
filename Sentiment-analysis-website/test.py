import re
with open('test.txt', 'r') as f:
    tweets = [line.rstrip() for line in f.readlines()]

f.close()

print(tweets)