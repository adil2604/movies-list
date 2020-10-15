class MoviesListController < ApplicationController

    def create
        list = MoviesList.new(list_params)

        if list.save
            render json: list
        else
            render json: list.errors.messages
        end 

    end
    def destroy
        list = MoviesList.find(params[:id])
        if list.destroy
            head :no_content
        else
            render json: list.errors.messages
        
        end
    end
    def index
        list = MoviesList.all
        render json: list
    end
    def list_params
        params.require(:movies_list).permit(:name)
    end

end
