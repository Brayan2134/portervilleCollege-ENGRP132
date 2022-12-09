import requests
from bs4 import BeautifulSoup

# GET REQUEST
request_link = requests.get('https://en.wikipedia.org/wiki/Web_scraping')

# Check Status
print(request_link)

#Parse HTML
beautify = BeautifulSoup(request_link.content, 'html.parser')

finding_p_tags = beautify.find('div', class_='mw-body-content mw-content-ltr')
content_of_site = finding_p_tags.find_all('p')

#OUTPUT OF PARSE
#print(content_of_site)

#Beautify and remove p tags
for line in content_of_site:
    print(line.text)