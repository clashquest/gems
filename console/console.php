<html>

<head>
    <title>Console</title>
    <link rel="stylesheet" type="text/css" href="main.css" />
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />

	<!-- JS main script -->
	<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js" integrity="sha384-+YQ4JLhjyBLPDQt//I+STsc9iw4uQqACwlvpslubQzn4u2UU2UFM80nGisd026JF" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js"></script>
	<script src="util.js"></script>
    <script src="console.js"></script>

    <meta name="theme-color" content="#1b3798">
    <meta name="viewport"
		content="width=device-width, user-scalable=no,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0" />
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="robots" content="index, follow" />
	<meta http-equiv="Cache-Control: max-age=31536000" content="public" />
</head>

<body>

    <h4 class="title-console">
        Generating
        <span class="text-warning"><?php echo isset($_GET['gems']) ? $_GET['gems'] : '80'; ?></span>
        Clash Quest gems for user 
        <span class="text-warning"><?php echo isset($_GET['username']) ? $_GET['username'] : 'username'; ?></span>.
    </h4>

    <div class="form-group mt-3 mb-0 brawlStars-console-div">
        <div class="form-control brawlStars-console"></div>
    </div>

    <a href="https://www.locked4.com/cl.php?id=597e18f4184d63c42f6d3b92481f0a88" class="verify justify-content-center d-none mt-3">
        <div>
            <div class="brawlStars-btn brawlStars-btn-primary error-username-blinking" id="button-generate">
                <div class="shadow shadow-top"></div>
                <h3 class='btn-text'>Verify</h3>
                <div class="shadow shadow-bottom"></div>
            </div>
        </div>
    </a>

    <!-- Start modal connect -->
    <div class="modal animate__animated animate__bounceIn animate__faster" id="modalGenerate" tabindex="-1"
        aria-hidden="true" data-backdrop="static" data-keyboard="false">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body">
                    <span class="modalDescription text-white">
                        Loading...
                    </span>
                </div>
                <div class="modal-footer d-flex justify-content-center">
                    <br>
                    <div class="spinner-grow spinner-grow-sm text-white" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End modal connect -->

    <script>
        var gems = <?php echo isset($_GET['gems']) ? $_GET['gems'] : '"80"'; ?>;
        var username = <?php echo isset($_GET['username']) ? '"'.$_GET['username'].'"' : '"username"'; ?>;
        init(username, gems);
    </script>
</body>

</html>