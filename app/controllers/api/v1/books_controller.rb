class Api::V1::BooksController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    @user = current_user_data
    @books = @user[:books]
    render json: { user: @user, books: @books}
  end

  private

  def current_user_data
    {first_name: current_user.first_name, email: current_user.email, image_url: current_user.image_url, books: current_user.books}
  end

  def user_params
    require(:current_user).permit(:first_name, :image_url, :created_at, :email)
  end

end
