class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :page_count, :description, :location, :image_url, :publication_year
end
