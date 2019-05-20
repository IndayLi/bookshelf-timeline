class Api::V1::BooksController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    @books = current_user.books
    render json: { user: current_user_data, books: @books }
  end

  def show
    @book = Book.find(params[:id])
    render json: @book
  end

  def create
    user_input = JSON.parse(request.body.read)
    @user = user_input["user"]
    @book = Book.new( title: user_input["book"]["title"], author: user_input["book"]["author"],page_count: user_input["book"]["page_count"],description: user_input["book"]["description"],location: user_input["book"]["location"],publication_year: user_input["book"]["publication_year"])
    if @book.save
      Shelf.create(user_id: @user["id"], book: @book)
      render json: { book: @book }
    else
      render json: { error: @book.errors.full_messages }, status: :unprocessable_entity
    end

  end

  private

  def current_user_data
    {id: current_user.id, first_name: current_user.first_name, email: current_user.email, image_url: current_user.image_url}
  end

  def user_params
    require(:current_user).permit(:id)
  end

end
