<!DOCTYPE html>
<html data-ng-app="ddcApp">
    <head>
        <meta charset="UTF-8">
        <title>#digidevcloud | Helping getting it done</title>
        <link href="assets/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <link href="assets/css/bootstrap-theme.min.css" rel="stylesheet" type="text/css" />
        <link href="assets/css/template.css" rel="stylesheet" type="text/css" />
        <script src="assets/js/angular.min.js"></script>
        <script src="assets/js/angular-route.min.js"></script>
        <script src="assets/js/angular-cookies.min.js"></script>
        <script src="app/app.module.js"></script>
        <script src="app/app.config.js"></script>
        <script src="app/app.component.js"></script>
        <script src="app/default/default.module.js"></script>
        <script src="app/default/default.component.js"></script>
        <script src="app/toolbar/toolbar.dir.js"></script>
        <script src="assets/js/jquery.min.js"></script>
    </head>
    <body>
        <toolbar></toolbar>
        <div class="body-main">
            <div data-ng-view=""></div>
        </div>
        <div class="footer">
            
        </div>
    </body>
</html>