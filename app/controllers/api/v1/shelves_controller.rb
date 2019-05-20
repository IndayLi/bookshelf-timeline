class Api::V1::ShelvesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    @shelves = Shelf.all
    render json: @shelves
  end

  def created
  end

protected

end
