from nltk.corpus import wordnet as wn
from nltk.tag import pos_tag
import sys
import string

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

remove_punctuation_map = dict((ord(char), None) for char in string.punctuation)

for question in research_goals_library["research_questions"]:
	total_words = 0
	total_senses = 0
	#total_words = len(question.split())
	for i in [i[0] for i in pos_tag(question.translate(remove_punctuation_map).split())]:
		senses = wn.synsets(i)
		#print i + ' '+ str(senses)
		if len(senses) > 0:
			total_senses += len(senses)
			total_words += 1
	clarityScore = float(total_senses)/total_words

	clarityScores.append((clarityScore, {'question':question, 'total_words':total_words, 'total_senses':total_senses}))

	#print str(float(total_senses)/total_words) 
	#print question + '\n'

sortedScores = sorted(clarityScores, key=lambda x: x[0], reverse=False)

#print '-------sorted-------------'

for sortedScore in sortedScores:
	print str(sortedScore[0]) + ': ' + sortedScore[1]['question'] + '\n'



print '-------Claims-------------'


clarityScores = []

remove_punctuation_map = dict((ord(char), None) for char in string.punctuation)

for claim in research_goals_library["design_arguments"]:
	total_words = 0
	total_senses = 0
	#total_words = len(claim.split())
	for i in [i[0] for i in pos_tag(claim.translate(remove_punctuation_map).split())]:
		senses = wn.synsets(i)
		#print i + ' '+ str(senses)
		if len(senses) > 0:
			total_senses += len(senses)
			total_words += 1
	clarityScore = float(total_senses)/total_words

	clarityScores.append((clarityScore, {'claim':claim, 'total_words':total_words, 'total_senses':total_senses}))

	#print str(float(total_senses)/total_words) 
	#print claim + '\n'

sortedScores = sorted(clarityScores, key=lambda x: x[0], reverse=False)

#print '-------sorted-------------'

for sortedScore in sortedScores:
	print str(sortedScore[0]) + ': ' + sortedScore[1]['claim'] + '\n'













