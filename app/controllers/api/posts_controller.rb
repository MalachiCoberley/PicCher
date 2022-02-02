class Api::PostsController < ApplicationController
  before_action :require_logged_in, only: [:create, :destroy]

  def index
    @posts = Post.all
    render :index
  end

  def show
    @post = Post.find(params[:id])
    render :show
  end

  def search
    @posts = Post.where("lower(title) LIKE ? OR lower(description) LIKE ?", "%#{params[:search].downcase}%", "%#{params[:search].downcase}%")
    render :index
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      render json: "great success"
    else
      render json: @post.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @post = Post.find(params[:id])
    if @post
      @post.destroy
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  private

  def post_params
    params.require(:post).permit(:title, :description, :location, :date_taken, :author_id, :photo)
  end

end
