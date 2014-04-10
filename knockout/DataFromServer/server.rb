require 'sinatra'
require 'pp'
require 'json'

set :public_folder, '.'

before do
  response['Access-Control-Allow-Origin'] = '*'
end

all_tasks = [
  { :text => "Feed a cat",      :done => false },
  { :text => "Eat a pie",       :done => false },
  { :text => "write cool apps", :done => true  },
]

get '/api/tasks' do
  content_type :json

  all_tasks.to_json
end

post '/api/tasks' do
  content_type :json
  body_data = JSON.parse(request.body.read.to_s)

  all_tasks = body_data["tasks"]
  return { :success => 1 }.to_json
end
