class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :page_count, :description, :location, :image_url, :publication

  def publication
    if Time.parse(object.publication_year)
      Time.parse(object.publication_year).strftime('%Y')
    else
      object.publication_year
    end
  end

end
