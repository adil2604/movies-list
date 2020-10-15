class MoviesList < ApplicationRecord
    has_many  :movies, dependent: :destroy
end
