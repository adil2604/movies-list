class MoviesController < ApplicationController
    # skip_forgery_protection
    def create
        movie = Movie.new(movie_params)
        if movie.save
            render json: movie
        else
            render json: movie.errors.messages
        end
    end
    def destroy
        movie = Movie.find(params[:id])
        if movie.delete
            head :no_content
        else
            render json: movie.errors.messages
        end
    end

    def movie_params
        params.require(:movie).permit(:name,:movies_list_id)
    end 
end
