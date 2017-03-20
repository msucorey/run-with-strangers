Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resource :user, only: [:create, :update]
    resource :session, only: [:create, :destroy, :show]
    resources :cities, only: [:index, :show] do
      resources :events, only: [:index]
    end
    resources :events, only: [:show, :create, :update, :destroy]
  end

  root "static_pages#root"
end
