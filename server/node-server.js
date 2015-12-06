var express = require("express"),
 bodyParser = require("body-parser"),
 methodOverride = require("method-override"),
 session = require("express-session"),
 cookieParser = require("cookie-parser"),
 passport = require("passport"),
 LocalStrategy = require("passport-local").Strategy;
 app = express();

// notre application
app.use(express.static(__dirname + "/public"));

// Obligatoire si on veut utiliser le système des sessions, ce module
// permet à express de décoder les données contenues dans les cookies
app.use(cookieParser());

// lecture du contenu des requetes
app.use(bodyParser());

//permet l'utilisation de requetes du type DELETE et PUT
app.use(methodOverride());

// nécessaire pour l'utilisation des sessions. secret sert à signer le cookie
app.use(session({ secret: "private" }));

// Initialisation de PassportJs ansi que du système de session
app.use(passport.initialize());
app.use(passport.session());
