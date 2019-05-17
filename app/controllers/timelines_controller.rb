class TimelinesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def new
  end 

end
