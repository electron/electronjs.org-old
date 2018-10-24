npm start &
pid=$(jobs -p)

finish() {
  echo Killing app with PID: $pid
  kill $pid
}
trap finish EXIT

echo App launched with PID: $pid
wait-on http://localhost:5000
cypress run --record --key a0cba5c6-0650-4abe-8d41-d990bb7a0a66
