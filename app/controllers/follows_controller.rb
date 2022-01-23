class FollowsController < ApplicationController
  def create
    @follow = Follow.new
    @follow.user_id = params[:id]
    @follow.follower_id = current_user.id
    unless @follow.save
      flash[:errors] = @follow.errors.full_messages
    end
    redirect_to user_url(params[:id])
  end

  def destroy
    @follow = Follow.find(params[:id])
    @follow.destroy
    redirect_to user_url(@follow.user_id)
  end
end
