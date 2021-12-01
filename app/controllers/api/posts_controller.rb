class PostsControllerController < ApplicationController
  before_action :require_logged_in, only: [:create, :destroy]

  def index
    @posts = Post.all
    render :index
  end

  def show
    @post = Post.find(params[:id])
    render :show
  end

  def create
    @post = current_user.posts.new(post_params)

    if @post.save
      render :show
    else
      render json: @post, status: :unprocessable_entity
    end
  end

  def destroy
  end

  private

  def post_params
    params.require(:post).permit(:title, :description, :location, :dateTaken, :authorId, :photo)
  end

end
