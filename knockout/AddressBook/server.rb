require 'sinatra'
require 'pp'
require 'json'

set :public_folder, '.'

before do
  response['Access-Control-Allow-Origin'] = '*'
end

all_contacts = [
  { :id => 0, :name => 'Harry', :email => 'harry@gmail.com' },
  { :id => 1, :name => 'Mark', :email => 'mark@yahoo.com' },
  { :id => 2, :name => 'John', :email => 'john@gmail.com' },
]

get '/api/contacts' do
  content_type :json

  ret = all_contacts.map do |el|
    { :id => el[:id], :name => el[:name] }
  end

  ret.to_json
end

get '/api/contacts/:id' do
  content_type :json
  id = params["id"].to_i
  pp params

  all_contacts.find { |el| el[:id] == id }.to_json
end

post '/api/contacts/:id' do
  id = params["id"].to_i
  contact = all_contacts.find { |el| el[:id] == id }
  body_data = JSON.parse(request.body.read.to_s)

  contact[:name] = body_data["name"]
  contact[:email] = body_data["email"]
end




