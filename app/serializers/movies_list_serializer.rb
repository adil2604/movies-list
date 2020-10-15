class MoviesListSerializer < ActiveModel::Serializer
  attributes :id,:name, :movies,:count

  def movies
    object.movies.map do |movie|
      MoviesSerializer.new(movie)
    end
  end
  
  def count
    object.movies.count
  end

end
