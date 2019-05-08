class ShelvesController < ApplicationController
  def index
  end

  def show
    binding.pry
    @shelf = Shelf.find(params["id"])
  end

end
