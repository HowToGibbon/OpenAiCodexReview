  /* draw a rectangle of 400 pixels wide and 300 pixels tall and call it the screen */
  var screen = document.createElement('div');
  screen.style.width = '400px';
  screen.style.height = '300px';
  screen.style.backgroundColor = '#000000';
  document.body.appendChild(screen);
  /* make the background white */
  screen.style.backgroundColor = '#FFFFFF';
  /* draw a black vertical line in the middle of the screen */
  var line = document.createElement('div');
  line.style.width = '1px';
  line.style.height = '300px';
  line.style.backgroundColor = '#000000';
  line.style.position = 'absolute';
  line.style.left = '200px';
  screen.appendChild(line);
  /* draw a black rectangle of 80 pixels high and 5 pixels wide at the left of the screen. This is paddle1 */
  var paddle1 = document.createElement('div');
  paddle1.style.width = '5px';
  paddle1.style.height = '80px';
  paddle1.style.backgroundColor = '#000000';
  paddle1.style.position = 'absolute';
  paddle1.style.left = '0px';
  paddle1.style.top = '110px';
  screen.appendChild(paddle1);
  /* draw a black rectangle of 80 pixels high and 5 pixels wide at the right of the screen. This is paddle2 */
  var paddle2 = document.createElement('div');
  paddle2.style.width = '5px';
  paddle2.style.height = '80px';
  paddle2.style.backgroundColor = '#000000';
  paddle2.style.position = 'absolute';
  paddle2.style.left = '395px';
  paddle2.style.top = '110px';
  screen.appendChild(paddle2);
  /* draw a red circle with diameter 10 pixels at the center of the screen. This is the ball. */
  var ball = document.createElement('div');
  ball.style.width = '10px';
  ball.style.height = '10px';
  ball.style.borderRadius = '5px';
  ball.style.backgroundColor = '#FF0000';
  ball.style.position = 'absolute';
  ball.style.left = '195px';
  ball.style.top = '145px';
  screen.appendChild(ball);
  /* there are 2 players */
  var player1 = {
    score: 0,
    paddle: paddle1
  };
  var player2 = {
    score: 0,
    paddle: paddle2
  };
  /* player1 uses key q to move paddle1 upwards at 10 pixels per second */
  var player1Up = function() {
    var top = parseInt(player1.paddle.style.top);
    player1.paddle.style.top = (top - 10) + 'px';
  };
  document.addEventListener('keydown', function(event) {
    if (event.keyCode == 81) {
      player1Up();
    }
  });
  /* player1 uses key a to move paddle1 downwards at 10 pixels per second */
  var player1Down = function() {
    var top = parseInt(player1.paddle.style.top);
    player1.paddle.style.top = (top + 10) + 'px';
  };
  document.addEventListener('keydown', function(event) {
    if (event.keyCode == 65) {
      player1Down();
    }
  });
  /* player2 uses the up arrow to move paddle2 upwards at 10 pixels per second */
  var player2Up = function() {
    var top = parseInt(player2.paddle.style.top);
    player2.paddle.style.top = (top - 10) + 'px';
  };
  document.addEventListener('keydown', function(event) {
    if (event.keyCode == 38) {
      player2Up();
    }
  });
  /* player2 uses the down arrow to move paddle2 downwards at 10 pixels per second */
  var player2Down = function() {
    var top = parseInt(player2.paddle.style.top);
    player2.paddle.style.top = (top + 10) + 'px';
  };
  document.addEventListener('keydown', function(event) {
    if (event.keyCode == 40) {
      player2Down();
    }
  });
  /* both players start with a score of 0. Draw the scores at the top of the screen. */
  var score1 = document.createElement('div');
  score1.style.position = 'absolute';
  score1.style.left = '10px';
  score1.style.top = '10px';
  score1.style.color = '#000000';
  score1.innerHTML = '0';
  screen.appendChild(score1);
  var score2 = document.createElement('div');
  score2.style.position = 'absolute';
  score2.style.left = '385px';
  score2.style.top = '10px';
  score2.style.color = '#000000';
  score2.innerHTML = '0';
  screen.appendChild(score2);
  /* a game consists of multiple rounds */
  var round = 0;
  /* at the start of a round, position the ball at the middle of the screen and move the ball in a random direction at 2 pixels per second */
  var ballDirection = Math.random() * 2 * Math.PI;
  var ballSpeed = 2;
  var ballX = 200;
  var ballY = 150;
  var ballMove = function() {
    ballX += ballSpeed * Math.cos(ballDirection);
    ballY += ballSpeed * Math.sin(ballDirection);
    ball.style.left = ballX + 'px';
    ball.style.top = ballY + 'px';
  };
  /* when the ball hits the top or the bottom of the screen, bounce the ball */
  var ballBounce = function() {
    if (ballY < 0) {
      ballDirection = -ballDirection;
    }
    if (ballY > 290) {
      ballDirection = -ballDirection;
    }
  };
  /* when the ball hits paddle1 or paddle2, bounce the ball */
  var ballBouncePaddle = function() {
    if (ballX < 5 && ballY > parseInt(player1.paddle.style.top) - 5 && ballY < parseInt(player1.paddle.style.top) + 85) {
      ballDirection = Math.PI - ballDirection;
    }
    if (ballX > 395 && ballY > parseInt(player2.paddle.style.top) - 5 && ballY < parseInt(player2.paddle.style.top) + 85) {
      ballDirection = Math.PI - ballDirection;
    }
  };
  /* when the ball hits the left side of the screen, player2 wins and gets 1 point. Then, a new round is started */
  var ballHitLeft = function() {
    if (ballX < 0) {
      player2.score++;
      score2.innerHTML = player2.score;
      round++;
      ballX = 200;
      ballY = 150;
      ballDirection = Math.random() * 2 * Math.PI;
    }
  };
  /* when the ball hits the right side of the screen, player1 wins and gets 1 point. Then, a new round is started */
  var ballHitRight = function() {
    if (ballX > 400) {
      player1.score++;
      score1.innerHTML = player1.score;
      round++;
      ballX = 200;
      ballY = 150;
      ballDirection = Math.random() * 2 * Math.PI;
    }
  };
  /* when a player accumulates 11 points, that player becomes the winner and the game is over. */
  var gameOver = function() {
    if (player1.score == 11) {
      alert('Player 1 wins!');
    }
    if (player2.score == 11) {
      alert('Player 2 wins!');
    }
  };
  /* when the game is over, print a victory message and stop the game */
  var gameLoop = function() {
    ballMove();
    ballBounce();
    ballBouncePaddle();
    ballHitLeft();
    ballHitRight();
    gameOver();
  };
  setInterval(gameLoop, 10);
  /* start or restart the game and ball on click of the screen */
  screen.addEventListener('click', function() {
    round = 0;
    player1.score = 0;
    player2.score = 0;
    score1.innerHTML = '0';
    score2.innerHTML = '0';
    ballX = 200;
    ballY = 150;
    ballDirection = Math.random() * 2 * Math.PI;
  });
