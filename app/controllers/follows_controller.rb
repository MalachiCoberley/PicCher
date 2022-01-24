class FollowsController < ApplicationController
  def create
    @follow = Follow.new
    @follow.user_id = params[:follow][:user_id].to_i
    @follow.follower_id = params[:follow][:follower].to_i
    if @follow.save
      render json: "Following User"
    else
      flash[:errors] = @follow.errors.full_messages
    end
  end

  def index
    @follows = Follow.find_by(user_id: params[:userId])
    render json: @follows
  end


  def destroy
    @follow = Follow.find(params[:id])
    @follow.delete
  end
end
