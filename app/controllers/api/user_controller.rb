class Api::UserController < ApplicationController

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render "api/users/update"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    render "api/users/show"
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email, :about, :city, :country)
  end
end
