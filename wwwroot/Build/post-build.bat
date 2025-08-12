REM :: This script is executed after the build process.

REM :: Install the Library Manager CLI tool if not already installed
call dotnet tool install -g Microsoft.Web.LibraryManager.Cli

REM :: Restore JavaScript libraries (ie: jquery, bootstrap) using Library Manager
call libman restore