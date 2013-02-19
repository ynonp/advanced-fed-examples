#!/usr/bin/env perl
use Mojolicious::Lite;

# Documentation browser under "/perldoc"
plugin 'PODRenderer';

get '/' => sub {
  my $self = shift;
  $self->render('index');
};

get '/data.json' => sub {
    my $self = shift;
    $self->res->headers->add( 'Access-Control-Allow-Origin', '*' );
    $self->render(json => {pages => [
                qw/home gallery about contact products/
            ]})
};

app->start;
__DATA__

@@ index.html.ep
% layout 'default';
% title 'Welcome';
Welcome to the Mojolicious real-time web framework!

@@ layouts/default.html.ep
<!DOCTYPE html>
<html>
  <head><title><%= title %></title></head>
  <body><%= content %></body>
</html>
