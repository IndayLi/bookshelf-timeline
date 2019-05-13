Rails.application.routes.draw do
  root "shelves#index"
  devise_for :users, controllers: { registrations: "registrations", sessions: "sessions" }

  namespace :api do
    namespace :v1 do
      resources :shelves, only: [:index, :show] do
        resources :books, only: [:index, :show]
      end
    end
  end

  resources :homes, only: [:index]
  resources :shelves, only: [:index, :show] do
    resources :books, only: [:index, :show]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
