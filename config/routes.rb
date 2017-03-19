Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resource :user, only: [:create, :update]
    resource :session, only: [:create, :destroy, :show]
    resources :cities, only: [:index, :show]
    resources :events, only: [:show, :create, :update, :destroy]
  end

  root "static_pages#root"
end
