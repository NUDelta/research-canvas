from nltk.corpus import wordnet as wn
from nltk.tag import pos_tag
import sys

#To read research_goals_library
import json


sent = "dog is barking at a tree"

print 'original sentence: ' + sent

for i in [i[0] for i in pos_tag(sent.split())]:
	print i + ' ' + str(wn.synsets(i))


#clairty heuristic
total_words = len(sent.split())
total_senses = 0



for i in [i[0] for i in pos_tag(sent.split())]:
	senses = wn.synsets(i)
	total_senses += len(senses)
	print i + ': ' + str(senses)


print '-------------Initial Test---------- '
print 'total senses: ' + str(total_senses)
print 'total words: ' + str(total_words)
print 'ratio: ' + str(float(total_senses)/total_words)


#Open up the dictionary of DTR Phrases to match on
with open('research_goals_library.json') as data_file:
	research_goals_library = json.load(data_file);


print '-------Research Questions-------------'

clarityScores = []

for question in research_goals_library["research_questions"]:
	total_words = len(question.split())
	for i in [i[0] for i in pos_tag(question.split())]:
		senses = wn.synsets(i)
		total_senses += len(senses)
	
	print str(float(total_senses)/total_words) 
	print question
	print '\n'










