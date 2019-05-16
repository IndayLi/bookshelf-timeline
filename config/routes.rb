Rails.application.routes.draw do
  get '/', to: "books#index"
  devise_for :users, controllers: { registrations: "registrations", sessions: "sessions" }

  namespace :api do
    namespace :v1 do
      resources :books, only: [:index, :show]
    end
  end

  resources :homes, only: [:index]
  resources :books, only: [:index, :show]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
