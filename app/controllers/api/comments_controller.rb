class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render json: @comment
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def index
    @comments = Comment.where(post_id: params[:post_id])
    render json: @comments
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.delete
  end

  private

  def comment_params
    params.require(:comment).permit(:comment, :user_id, :post_id)
  end
end
