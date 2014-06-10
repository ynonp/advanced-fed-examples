if exists("s:loaded")
  finish
endif

let s:loaded = 1

let g:ctrlp_custom_ignore = {
  \ 'dir':  '\v[\/]\.(git|hg|svn)$|bower_components/',
  \ 'file': '\.pyc$\|\.pyo$\|\.rbc$|\.rbo$\|\.class$\|\.o$\|\~$\|\.min\.js$|\.min\.css$',
  \ }

command! StartServer call StartServer()
command! StopServer call StopServer()

noremap <silent> <leader>r <Esc>:call ReloadPageInChrome()<cr>
nnoremap gf :e <cfile><cr>

set completefunc=CompleteHTMLTags

function TernDocBrowse()
  :TernDocBrowse
endfunc

augroup web
  au!
  au BufWritePost *.html call RefreshHTMLTags()
augroup END

CtrlPClearAllCaches

