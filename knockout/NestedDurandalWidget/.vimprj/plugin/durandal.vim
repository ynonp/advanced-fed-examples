if exists("g:durandal")
  finish
endif

let g:durandal = 1

let g:generators_dir = ".vimprj/generators/"

" don't autocommand templates
let g:templates_no_autocmd = 1

function! TemplateIfEmpty(template)
  if line('$') == 1 && getline(1) == ''
    exec "Template " . a:template
  endif
endfunction

augroup durandal
  au!
  au BufRead */app/view_models/*.js call TemplateIfEmpty("kovm")
  au BufRead */app/widgets/**/*.js call TemplateIfEmpty("durandal-widget")
  au BufRead */app/bindings/*.js call TemplateIfEmpty("ko-binding")
  au BufRead */app/*.js call TemplateIfEmpty("durandal-module")
  au VimLeavePre * execute "StopServer"
augroup END

CtrlPClearAllCaches
