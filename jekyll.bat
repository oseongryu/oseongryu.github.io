:cd C:\DEV\workspace\f5074.github.io
:start cmd /c bundle exec jekyll serve --host 127.0.0.1 --port 4000
:timeout /t 10
:bundle exec jekyll serve --skip-initial-build --host 127.0.0.1 --port 4000


cmd /c bundle exec jekyll serve --host 127.0.0.1 --port 4000
IF "%ERRORLEVEL%" == "0" goto ERROR
ELSE goto EXEC

:EXEC
bundle exec jekyll serve --skip-initial-build --host 0.0.0.0 --port 4000

:ERROR
bundle exec jekyll serve --skip-initial-build --host 0.0.0.0 --port 4000