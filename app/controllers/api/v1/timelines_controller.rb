class Api::V1::TimelinesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    @timelines = current_user_data[:timelines]
    render json: @timelines
  end

  def created
  end

protected

  def current_user_data
    {first_name: current_user.first_name, email: current_user.email, image_url: current_user.image_url, books: current_user.books}
  end

end
