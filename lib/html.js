const htmlBegin = 
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Team Organizational Chart</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="./style.css">

</head>
<body>
  <header class="container text-center bg-danger">
    <h1>My Team</h1>
  </header>
  <main>
    <div id="team-display" class="container text-left">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 justify-content-center">`

const htmlEnd = 
  `   </div>
    </div>
  </main>
  <!-- link to JavaScript libraries and functionality-->
  <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
  <script type="text/javascript" src="/script.js"></script>
</body>
</html>`

module.exports = {
  htmlBegin, 
  htmlEnd
};