#!/bin/bash

sqlite3 GoDB.db "create table users(userid int, userName varchar(15));"
sqlite3 GoDB.db "create table userinfo(userid int, name varchar(50), address varchar(50), birthday text);"
sqlite3 GoDB.db "create table obligation(obligationid int, userid int, name varchar(30), description varchar(200), starttime text, endtime text, priority int, status int, category int);"
sqlite3 GoDB.db "create table subObligation(sobligationid int, obligationid int, name varchar(15), description varchar(200), starttime text, endtime text, priority int, status int);"
sqlite3 GoDB.db "create table reminder(reminderid int, obligationid int, remindertime text, description varchar(200));"
sqlite3 GoDB.db "create table alarm(alarmid int, obligationid int, alarmtime text, soundType int);"
sqlite3 GoDB.db "create table contactlist(userid int, userlist text);"

echo "Success creating GoDB.db file (doesn't actually check yet, just asserts this script has finished)"
