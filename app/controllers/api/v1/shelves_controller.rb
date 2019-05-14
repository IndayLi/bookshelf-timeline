class Api::V1::ShelvesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  #
  # serialization_scope :current_user
  #
  # def index
  #   @shelves = current_user.shelves
  #   render json: @shelves
  # end
  #
  # private
  #
  # def user_params
  #   require(:current_user).permit(:first_name, :image_url, :created_at, :email)
  # end
end
