#PIP INSTALL REQUESTS
#PIP INSTALL BS4

import requests
from bs4 import BeautifulSoup

# GET REQUEST
request_link = requests.get('https://www.geeksforgeeks.org/python-programming-language/')

# Check Status
print(request_link)

#Print Content of Site
#print(request_link.content)

#BEAUTIFY SOUP
beautify = BeautifulSoup(request_link.content, 'html.parser')
print(beautify.prettify())