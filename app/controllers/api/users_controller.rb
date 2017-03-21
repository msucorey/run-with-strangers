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

  def update
    @user = User.find_by_email(params[:user][:email])
    if @user.update_attributes(user_params)
      render "api/users/show"
    else
      render json: ["Update unsuccessful"], status: 401
    end
  end

  private

  def user_params
    params.require(:user)
      .permit(:username, :email, :password, :city_id, :is_host,
              :host_image_url, :host_intro, :facebook_url, :twitter_url, run_date_ids: [])
  end

end
