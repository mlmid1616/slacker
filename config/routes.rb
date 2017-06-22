Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :channels, only: [:index, :show, :create, :update, :delete]
    resources :messages, only: [:create, :index, :update, :delete]
    resource :user, only: [:create, :update, :delete]
    resource :session, only: [:create, :destroy]
  end

  root "static_pages#root"
end
