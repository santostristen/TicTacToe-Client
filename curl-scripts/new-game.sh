#!/bin/bash

API="https://tic-tac-toe-api-development.herokuapp.com"
URL_PATH="/games"

curl "${API}${URL_PATH}" \
--include \
--request POST \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-type: application/json" \
  --data '{
    "games": [
    {
     "cells": ["","","","","","","","",""],
          "over": false,
          "_id": "",
          "owner": "",
          "createdAt": "",
          "updatedAt": "",
          "__v": 0
  }'

echo
