<?php
require_once 'config/database.php';
$template = new Template();
$data = [
    'title' => 'Home',
    'slot' => $template->render('home',["sidebar" => $template->render('sidebar', [])])
];
$template->view("layout",$data);