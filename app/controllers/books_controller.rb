class BooksController < ApplicationController
  before_action :authorize_user

  def index
  end

  def show
  end

  def authorize_user
    if !user_signed_in?
      flash[:notice] = "Please sign in or create an account."
      redirect_to new_user_session_path
    end
  end

end
