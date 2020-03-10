# ASSESSMENT 5: Rails Practical Questions

1. What is the command to create a new Rails application with a Postgres database?

rails new name_app -d postgresql -T

2. Explain each section of the following route:  get '/library/:id' => 'book#show'

get - http verb
library - url
:id - (i am going to guess here) a specific identification route for an element 
book - controler name
show - method name

3. Oops, I forgot to add a foreign key to my model. Describe the steps to remedy this mistake.

Since we ar enot allowed to modify schema directly I will have to go into Terminal

rails generate migration name_it_something_interesting
press enter
go into editor 
open the ne migrated file "name_it_something_interesting" (whis is located in the ... somewhere in migration)
add
def change
    add_column: :id_the_class :what_we_are_adding :a_string_or_an_integer
end



4. What is the command to generate a Rails model for a person table with columns named shirt, pants, and shoes?


rails generate migration



5. I want to add validations to the model from question 4 to ensure no one can make a new entry without data in all the columns. How do I do that?

model class validation. It is either inclusiv or exclusive
it is validated within the Class