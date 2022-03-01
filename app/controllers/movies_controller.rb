class MoviesController < ApplicationController
  def index
    @movies = Movie.order(year: :desc)

    if params[:query].present?
      @movies = @movies.where('title ILIKE ?', "%#{params[:query]}%")
    end

    respond_to do |format|
      format.html { 
        # render :index#.html.erb 
      }

      format.text { 
        render(
          partial: 'movies/list', # look for the partial with this path
          formats: [:html], #the extension of the partial is .html
          locals: { movies: @movies } #inside of that partial, we need some variables. Here are they.
        )
      }
    end
  end

  def update
    @movie = Movie.find(params[:id])
    @movie.update strong_params

    respond_to do |format|
      format.html { 
        redirect_to request.referrer # the same page
       }

       format.text {
         render(
           partial: 'movies/movie_infos',
           formats: [:html],
           locals: { movie: @movie }
         )
       }
    end
    
  end

  private

  def strong_params
    params.require(:movie)
          .permit(:year, :title)
  end
end
