Rails.application.routes.draw do
  get '/api/messages', to: 'messages#greeting'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "messages#index"
end
