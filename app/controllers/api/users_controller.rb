class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user)
      .permit(:username, :email, :password, :city_id, :is_host,
              :host_image_url, :host_intro, :facebook_url, :twitter_url)
  end

end
