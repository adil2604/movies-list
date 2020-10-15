Rails.application.routes.draw do
  resources :movies , only: [:create,:destroy]
  resources :movies_list, only: [:create,:index,:destroy]
end
