@echo off
Title Discord Status Rotator
cls
color 0

:ask
echo 1) Install modules
echo 2) Launch
echo 3) Exit
set /p choix=What do you want? (1/2/3):
 
if /I "%choix%"=="1" (goto :Install)
if /I "%choix%"=="2" (goto :Launch)
if /I "%choix%"=="3" exit
goto ask

:Install
cls
npm i discord.js
 
:Launch
cls
index.htmlf
node status-rotator.js
pause
goto self