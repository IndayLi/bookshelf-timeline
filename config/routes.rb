Rails.application.routes.draw do
  root "books#index"
  devise_for :users, controllers: { registrations: "registrations", sessions: "sessions" }

  namespace :api do
    namespace :v1 do
      resources :shelves, only: [:index, :show]
      resources :books, only: [:index]
    end
  end

  resources :homes, only: [:index]
  resources :books, only: [:index, :show]
  # resources :shelves, only: [:index, :show] do
  # end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
