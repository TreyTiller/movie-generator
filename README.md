# Thinkful API HACK Capstone project (tasteDive, OmDb API)

The purpose of this app is to provide the user with a generated list of movies to watch. The list generates based on 
		what movie title the user searches for and relating titles with similar characteristics.

# Landing Page
	The user sees a short description and is introduced to site personality. 
	User is able to fill out form and start application
	![Screen Shot 2019-09-02 at 9 48 43 PM](https://user-images.githubusercontent.com/52612098/64139278-479ded00-cdce-11e9-9ca4-b6d7bbc44787.png)

# Results
	User sees the top suggestions related to their movie and certain information 
	break points were chosen based on design and mobile will show less than large format displays

# Suggestions
	If the API can't find a film they typed in a second chance to input is given and some movie suggestions 

 
    
## High Level User Stories:
	— User should be able to easily enter a movie title
	— User should be able to make multiple searches with only current results displaying
	— User should be able to see information about the film
	— User needs to be able to limit the number of results
  
  
  ## User Flows/wireframe/page layout(mobile):
	— HOME SCREEN
		— A description of the application and how to use
		— two button options ( generate by genre, generate by input i.e. movie title)
		— possibly add a third option to randomize movie generation
	— MOVIE TITLE SCREEN
		— A description of how to search
		— search bar for user input
		— result limiter for user input
		— a submit button
		— start over button
	— GENRE LIST SCREEN
		— short description of how to use
		— checkbox list of genres to choose(user can choose 1 or multiple)
		— result limiter for user input
		— submit button
		— start over button
	— DISPLAY RESULTS SCREEN
		— start over button 
		— run again button to get more results
		— listing of results which include such information as:
			movie poster
			title
			rating
			short description
			link to watch trailer
			link to more information
		— start over button
		— run again button to get more results


## User Flows/wireframe/page layout(full screen):
	— HOME SCREEN
		— Title of the application
		— short description of the application and how to use
		— a movie of the day section where a random title is generated on page load 
		— three button options (generate by genre, by movie title, or completely random)
		— footer includes a daily movie quote
		— button to navigate to “how we work” screen
	— MOVIE TITLE SCREEN
		—A description of how to search
		— search bar for user input
		— result limiter for user input
		— a submit button
		— start over button
		— button to navigate to “how we work” screen
		— footer includes a daily movie quote
	— GENRE LIST SCREEN
		— short description of how to use
		— checkbox list of genres to choose(user can choose 1 or multiple)
		— result limiter for user input
		— submit button
		— start over button
		— button to navigate to “how we work” screen
		— footer includes a daily movie quote
	— DISPLAY RESULTS SCREEN
		— start over button 
		— run again button to get more results
		— listing of results which include such information as:
			movie poster
			title
			year
			full description
			link to watch trailer
			link to more information
		— start over button
		— run again button to get more results
		— button to navigate to “how we work” screen
		— footer includes a daily movie quote
	— HOW IT WORKS SCREEN
		— a full description of how to use the application
		— a full description of how the code of the application works that includes reference to all api’s used and links to their site
		— Link to the repo
		— About the maker section
			name
			bio
			link to portfolio
			link to linkedIn
