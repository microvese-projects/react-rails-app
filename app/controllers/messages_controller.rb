class MessagesController < ApplicationController
  def index
  end
  
  def greeting
    random_message = Message.order('RANDOM()').first
    render json: random_message
  end
end
