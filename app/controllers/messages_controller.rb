class MessagesController < ApplicationController
  def index
    @random_message = Message.order('RANDOM()').first

    respond_to do |format|
      format.json { render json: @random_message }
      format.html
    end
  end
end
