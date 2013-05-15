use strict;
use warnings;

use ExtUtils::MakeMaker;

WriteMakefile(
  VERSION   => '0.01',
  PREREQ_PM => {
      'Test::More' => '0',
      YAML => '0',
      Plack => '0.9974',
      Mojolicious => '3.80'
  },
  test      => {TESTS => 't/*.t'},

);
